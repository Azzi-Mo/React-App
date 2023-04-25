import React from 'react';

import {  AiFillTwitterSquare , AiOutlineGithub , AiFillLinkedin , AiFillInstagram } from 'react-icons/ai';

const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const contactData = [
	{
		id: 1,
		name: 'Twitter',
		icon: iconStyle(AiFillTwitterSquare),
		link:'https://twitter.com/oOMoSTafOo'
		
	},
	{
		id: 2,
		name: 'Github',
		icon: iconStyle(AiOutlineGithub),
		link:'https://github.com/Mostafa-ElHawary'

	},
	{
		id: 3,
		name: 'Linkedin',
		icon: iconStyle(AiFillLinkedin),
		link:' https://www.linkedin.com/in/mostafa-el-hawary-542813248/'
	},
	{
		id: 4,
		name: 'Instagram',
		icon: iconStyle(AiFillInstagram),
		link:'https://www.instagram.com/mostafabinaziz/'
	},

];