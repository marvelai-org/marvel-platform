export const exportToCSV = (data, panelData) => {
  const escapeCSVField = (field) =>
    typeof field === 'string' ? `"${field.replace(/"/g, '""')}"` : field;

  let headers;
  let rows;

  if (data?.toolId === '0') {
    headers = [
      'Question',
      'Option A',
      'Option B',
      'Option C',
      'Option D',
      'Correct Answer',
      'Explanation',
    ];
    rows = panelData.map((item) => [
      escapeCSVField(item.question),
      escapeCSVField(item.choices[0]?.value || ''),
      escapeCSVField(item.choices[1]?.value || ''),
      escapeCSVField(item.choices[2]?.value || ''),
      escapeCSVField(item.choices[3]?.value || ''),
      escapeCSVField(item.answer),
      escapeCSVField(item.explanation || ''),
    ]);
  } else {
    headers = ['Concept', 'Definition'];
    rows = panelData.map((item) => [
      escapeCSVField(item.concept),
      escapeCSVField(item.definition),
    ]);
  }

  const csvContent = [headers.join(','), ...rows.map((e) => e.join(','))].join(
    '\n'
  );
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${data?.title.replace(/\s+/g, '_').toLowerCase()}.csv`;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};

export const copyToClipboard = (data, panelData) => {
  const label =
    data?.toolId === '0' ? 'Questions and Options' : 'Concepts and Definitions';
  const textToCopy = `
    Title: ${data?.title || 'Default Title'}

    Content: ${data?.content || 'Default Content'}

    ${label}:
    ${panelData
      .map((item, i) =>
        data?.toolId === '0'
          ? `${i + 1}. ${item.question}\n${item.choices
              ?.map((choice) => `   ${choice.key}. ${choice.value}`)
              .join('\n')}`
          : `${i + 1}. ${item.concept} - ${item.definition}`
      )
      .join('\n\n')}
    `;

  navigator.clipboard.writeText(textToCopy);
};
