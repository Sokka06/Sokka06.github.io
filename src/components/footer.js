import * as React from "react"
import { Box, VStack, Text, SlideFade, useDisclosure, Icon, HStack } from "@chakra-ui/react"
import { InView  } from 'react-intersection-observer';

import {GrGatsbyjs} from '@react-icons/all-files/gr/GrGatsbyjs'
import {SiFramer} from '@react-icons/all-files/si/SiFramer'

const stack = [
	{ name: 'Gatsby', icon: GrGatsbyjs },
	{ name: 'Chakra UI'},
	{ name: 'Framer Motion', icon: SiFramer },
  ]

function StackIcon ({item}) {
	return(
		<>
		{item.icon ? 
			<Icon shadow='sm' as={item.icon} alt={item.name} /> 
			: <Text colorScheme='teal' as='span'>{item.name}</Text> }
		</>
	)
}

export default function Github() {

	const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

	function OnChange(inView, entry) {
		console.log('Inview:', inView);
		{inView ? onOpen() : onClose()}
	}

	return(
		<InView onChange={OnChange}>
			
			<Box as="footer" role="contentinfo" mx="auto" maxW="7xl" pb="12" px={{ base: '4', md: '8' }}>
			<SlideFade in={isOpen} delay={1}>
				<VStack align='center' spacing='0'>
					<Text fontSize="sm" color='gray.500'>
						Made with
					</Text>
					<HStack>
					{stack.map((item, index) => (
						<React.Fragment key={item.name}>
						<StackIcon item={item} />
						{index + 1 < stack.length && <Text as='span' color='gray.500'>+</Text>}
						</React.Fragment>
						))}
					</HStack>
					<Text fontSize="sm" color='gray.500'>
					&copy; {new Date().getFullYear()} Santtu Niskala. All rights reserved.
					</Text>
				</VStack>
			</SlideFade>
			</Box>
		</InView>
	)
}