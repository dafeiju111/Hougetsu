// for simulating AI request
export const fetchTranslation = async (text: string): Promise<string> => {
  
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  return `[simulation]：${text.split('').reverse().join('')}`;
};