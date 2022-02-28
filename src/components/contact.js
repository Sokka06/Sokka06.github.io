import * as React from "react"
import { Center, Box, Heading, Text, HStack, IconButton, Link, Container, Spacer, useMediaQuery } from "@chakra-ui/react"

import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

import { motion } from "framer-motion"

/* const SocialButton = (label, link, icon, ) => (
	<IconButton size='lg' variant='outline' colorScheme='teal' aria-label={label} icon={icon} >
		<Link href={link} />
	</IconButton>
) */

const MotionLink = motion(Link)

function SocialButton({ label, href, icon, ...props }) {
	return (
	  <MotionLink whileHover={{ scale: 1.1 }} href={href}>
		  <IconButton size='lg' variant='outline' colorScheme='teal' shadow='md' aria-label={label} icon={icon} {...props} />
	  </MotionLink>
	);
  }

const Contact = () => (
	<Container centerContent>
	<Box paddingY={2} textAlign='center'>
		<Heading as='h4' py='5'>Contact</Heading>
		<Text fontSize='xl'>I can be reached at</Text>
  	</Box>
	  <Box paddingY={2}>
		  <HStack>
			<SocialButton label='Email' href='mailto:niskalasanttu@gmail.com' icon={<MdEmail />} />
			<SocialButton label='LinkedIn' href='https://www.linkedin.com/in/santtu-niskala-abb890156' icon={<FaLinkedin />} />
			<SocialButton label='Twitter' href='https://twitter.com/sokka06' icon={<FaTwitter />} />
		</HStack>
	  </Box>
	  <Spacer pb='20'/>
	</Container>
)

Contact.propTypes = {
}

Contact.defaultProps = {
}

export default Contact