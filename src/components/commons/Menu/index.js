import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import { Logo } from '../../../theme/Logo/index';
import { Text } from '../../foundation/Text';
import { Button } from '../Button';

export default function Menu() {
	const links = [
		{
			texto: 'Home',
			url: '/',
		},
		{
			texto: 'Perguntas Frequentes',
			url: '/faq',
		},
		{
			texto: 'Sobre',
			url: '/sobre',
		},
	]
    return (
		<MenuWrapper>
			<MenuWrapper.LeftSide>
				<Logo />
			</MenuWrapper.LeftSide>
			<MenuWrapper.CentralSide as="ul"> {/* MenuWrapper.CentralSide */}
				{[
					{ url: '/', name: 'Home' },
					{ url: '/faq', name: 'Perguntas Frequentes' },
					{ url: '/sobre', name: 'Sobre' },
					].map((link) => (
					<li key={link.url}>
						<Text variant="smallestException" tag="a" href={link.url}>
							{link.name}
						</Text>
					</li>
				))}
      		</MenuWrapper.CentralSide>
			<MenuWrapper.RightSide>
				<Button ghost variant='secondary.main'>Entrar</Button>
                <Button variant='primary.main'>Cadastrar</Button>
			</MenuWrapper.RightSide>
		</MenuWrapper>
    )
}