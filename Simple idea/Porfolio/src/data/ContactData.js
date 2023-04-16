import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import {  AiFillTwitterSquare , AiOutlineGithub , AiFillLinkedin , AiFillInstagram } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';

const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
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