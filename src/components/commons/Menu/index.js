import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import { Logo } from '../../theme/Logo/index';
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
            <MenuWrapper.CentralSide>
                {links.map((link) =>
                    <li key={link.url}>
                        <a href={link.url}>
                            {link.texto}
                        </a>
                    </li>
                )}
            </MenuWrapper.CentralSide>
			<MenuWrapper.RightSide>
				<Button ghost variant='secondary.main'>Entrar</Button>
                <Button variant='primary.main'>Cadastrar</Button>
			</MenuWrapper.RightSide>
		</MenuWrapper>
    )
}