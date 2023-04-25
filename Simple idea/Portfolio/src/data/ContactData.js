import React from 'react';

import {  AiFillTwitterSquare , AiOutlineGithub , AiFillLinkedin , AiFillInstagram } from 'react-icons/ai';

const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const contactData = [
	{
		name: 'Twitter',
		icon: iconStyle(AiFillTwitterSquare),
		imgClass: 'one',
	},
	{
		name: 'Github',
		icon: iconStyle(AiOutlineGithub),
		imgClass: 'two',
	},
	{
		name: 'Linkedin',
		icon: iconStyle(AiFillLinkedin),
		imgClass: 'three',
	},
	{
		name: 'Instagram',
		icon: iconStyle(AiFillInstagram),
		imgClass: 'four',
	},

];