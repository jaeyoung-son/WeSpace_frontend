export const checkMail = mail => {
  const mailtest = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return mailtest.test(mail);
};

export const checkPw = pw => {
  const pwtest = /^[A-Za-z0-9]{6,40}$/;
  return pwtest.test(pw);
};
