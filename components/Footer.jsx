import { Box } from '@chakra-ui/layout';

const Footer = () => (
  <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
    © 2022 Stallion Properties, Inc. 
    <br/> <a href ="mailto:stallionproperties@inbox.ru" className="p-text">Send Email: stallionproperties@inbox.ru</a>
  </Box>
);

export default Footer;