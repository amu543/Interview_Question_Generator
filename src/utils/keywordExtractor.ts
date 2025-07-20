// Common skills and keywords to look for
export const commonSkills = [
  'Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'HTML', 'CSS', 'Java',
  'leadership', 'communication', 'teamwork', 'problem-solving', 'project management',
  'Excel', 'PowerPoint', 'data analysis', 'machine learning', 'AI', 'cloud computing',
  'AWS', 'Azure', 'Docker', 'Kubernetes', 'Git', 'agile', 'scrum', 'testing',
  'API', 'database', 'frontend', 'backend', 'full-stack', 'mobile development',
  'UI/UX', 'design', 'marketing', 'sales', 'customer service', 'management',
  'strategy', 'analytics', 'research', 'planning', 'budgeting', 'finance'
];

// Extract keywords from text
export const extractKeywords = (text: string): string[] => {
  const words = text.toLowerCase().split(/\s+|[,.\-_()]+/);
  const foundSkills = commonSkills.filter(skill => 
    words.some(word => word.includes(skill.toLowerCase()) || skill.toLowerCase().includes(word))
  );
  
  // Also extract other potential keywords (3+ character words that appear multiple times)
  const wordCount: { [key: string]: number } = {};
  words.forEach(word => {
    if (word.length >= 3 && !['the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had', 'her', 'was', 'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his', 'how', 'man', 'new', 'now', 'old', 'see', 'two', 'way', 'who', 'boy', 'did', 'its', 'let', 'put', 'say', 'she', 'too', 'use'].includes(word)) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  });
  
  const additionalKeywords = Object.entries(wordCount)
    .filter(([word, count]) => count >= 2 && word.length >= 4)
    .map(([word]) => word);
  
  return [...new Set([...foundSkills, ...additionalKeywords])];
};

// Find matching keywords between job description and resume
export const findMatchingKeywords = (jobDescription: string, resume: string): string[] => {
  if (!jobDescription || !resume) return [];
  
  const jobKeywords = extractKeywords(jobDescription);
  const resumeKeywords = extractKeywords(resume);
  
  return jobKeywords.filter(keyword => 
    resumeKeywords.some(resumeKeyword => 
      resumeKeyword.toLowerCase().includes(keyword.toLowerCase()) ||
      keyword.toLowerCase().includes(resumeKeyword.toLowerCase())
    )
  );
};