import { useCallback, useEffect, useState } from 'react';

import {
  Box,
  Button,
  CircularProgress,
  Modal,
  Slider,
  Typography,
} from '@mui/material';

import { useDropzone } from 'react-dropzone';
import Cropper from 'react-easy-crop';
import { useController } from 'react-hook-form';

import useUploadFile from '../../hooks/useUploadFile';
import getCroppedImg from '../../utils/getCroppedImg';

import styles from './styles'; // Import styles

const ImageUpload = ({ name, control, uid, initialPhotoURL }) => {
  const { field } = useController({ name, control });
  const [preview, setPreview] = useState(initialPhotoURL || null);
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [cropImage, setCropImage] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const { uploading, progress, uploadFile } = useUploadFile();

  useEffect(() => {
    if (initialPhotoURL) {
      setPreview(initialPhotoURL);
    }
  }, [initialPhotoURL]);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      if (file.size <= 1024 * 1024) {
        setCropImage(URL.createObjectURL(file));
        setCropModalOpen(true);
      } else {
        setErrorMessage('File size should not exceed 1 MB.');
      }
    }
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
    },
    multiple: false,
    noClick: true,
  });

  const handleCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  const handleCropSave = async () => {
    try {
      const croppedImage = await getCroppedImg(cropImage, croppedArea, true);
      const blob = await fetch(croppedImage).then((res) => res.blob());
      const file = new File([blob], 'profile.jpg', { type: 'image/jpeg' });
      setCropModalOpen(false);

      const url = await uploadFile(file, uid, 'profilePhotos');
      field.onChange(url);
      setPreview(url);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to crop or upload the image.');
      setCropModalOpen(false);
    }
  };

  return (
    <Box {...getRootProps()} sx={styles.dropzoneBox}>
      <input {...getInputProps()} />

      {/* Display loader or image while maintaining size consistency when loading/displayed */}
      <Box sx={styles.previewImageContainer(uploading || preview)}>
        {uploading ? (
          <Box sx={styles.loaderBox}>
            <CircularProgress variant="determinate" value={progress} />
            <Typography variant="body2" color="text.secondary">{`${Math.round(
              progress
            )}%`}</Typography>
          </Box>
        ) : (
          preview && (
            <img src={preview} alt="Preview" style={styles.previewImage} />
          )
        )}
      </Box>

      {errorMessage && (
        <Typography variant="body2" color="error" sx={styles.errorMessage}>
          {errorMessage}
        </Typography>
      )}

      <Typography variant="subtitle1" sx={styles.typographyLabel}>
        Drag & Drop OR{' '}
        <span
          onClick={open}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && open()}
          style={styles.uploadInstructions.uploadLink}
        >
          Upload an Image
        </span>
      </Typography>

      <Typography variant="body2" sx={styles.typographyLabel}>
        Formats: JPG, PNG | Up to 1 MB
      </Typography>

      <Modal
        open={cropModalOpen}
        onClose={() => setCropModalOpen(false)}
        aria-labelledby="crop-modal"
      >
        <Box sx={styles.modalStyle}>
          <div style={styles.cropContainer}>
            <Cropper
              image={cropImage}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={handleCropComplete}
              onZoomChange={setZoom}
              cropShape="round"
              showGrid={false}
              style={{ containerStyle: { borderRadius: '50%' } }}
            />
          </div>
          <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            onChange={(e, newZoom) => setZoom(newZoom)}
            sx={{ mt: 2 }}
          />
          <Button onClick={handleCropSave} variant="contained" sx={{ mt: 2 }}>
            Save
          </Button>
          <Button
            onClick={() => setCropModalOpen(false)}
            variant="outlined"
            sx={{ mt: 2, ml: 1 }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ImageUpload;
