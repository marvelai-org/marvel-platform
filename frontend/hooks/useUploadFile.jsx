import { useState } from 'react';

import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';

const useUploadFile = () => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [fileURL, setFileURL] = useState('');
  const [progress, setProgress] = useState(0);

  const uploadFile = (file, uid, path, oldFileURL = null) => {
    return new Promise((resolve, reject) => {
      setUploading(true);
      setError(null);
      setProgress(0);

      try {
        const storage = getStorage();
        const storageRef = ref(storage, `${path}/${uid}/${file.name}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const prog =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(prog);
          },
          (err) => {
            setError('Failed to upload the file. Please try again.');
            setUploading(false);
            reject(err);
          },
          async () => {
            try {
              const url = await getDownloadURL(uploadTask.snapshot.ref);
              setFileURL(url);

              if (oldFileURL) {
                const oldFileRef = ref(storage, oldFileURL);
                await deleteObject(oldFileRef);
              }

              setUploading(false);
              resolve(url);
            } catch (err) {
              setError('Failed to retrieve the file URL.');
              setUploading(false);
              reject(err);
            }
          }
        );
      } catch (err) {
        setError('Failed to upload the file. Please try again.');
        setUploading(false);
        reject(err);
      }
    });
  };

  return { uploading, error, fileURL, progress, uploadFile };
};

export default useUploadFile;
