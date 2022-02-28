import * as React from "react"
import { Badge, Box, Container, Heading, HStack, Icon, Text, VStack, SimpleGrid, Tag, Stack } from "@chakra-ui/react"

const skills = [
	{
		title: 'Software',
		items: [
			{name: 'Unity'},
			{name: '3DS Max'},
			{name: 'Photoshop'},
		]
	},
	{
		title: 'Languages',
		items: [
			{name: 'C#'},
			{name: 'JavaScript'},
			{name: 'PHP'},
		]
	},
	{
		title: 'Tech',
		items: [
			{name: 'React'},
			{name: 'Firebase'},
			{name: 'Chakra UI'}
		]
	},
  ]

  function SkillIcon ({item}) {
	return(
		<Tag variant={'solid'} colorScheme='green'>{item.name}</Tag>
	)
}

export default function Skills () {
	return(
		<Container maxW={'container.lg'} p='5' centerContent>
		<SimpleGrid columns={{sm: 2, md: 3}} spacingY='3'>
			{skills.map((item, index) => (
				<VStack key={item.title}>
					<Heading size={'sm'} fontWeight='semibold' lineHeight='tight'>{item.title}</Heading>
					<HStack borderWidth='1px' borderRadius='lg' p='3' shadow={'md'}>
					{item.items.map((name) => (
						<SkillIcon item={name} key={name.name}/>
					))}
					</HStack>
				</VStack>
			))}
		</SimpleGrid>
	</Container>
	)
}