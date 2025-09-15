

// import { toast } from 'react-toastify';
// import { toast, ToastOptions } from 'react-toastify';
import { toast } from 'react-toastify';
// import type { ToastOptions } from 'react-toastify';
import {
	HiX,
	HiInformationCircle,
	HiCheck,
	HiExclamation,
} from 'react-icons/hi';
import type { ReactNode } from 'react';


type ToastType = 'success' | 'failure' | 'warning' | 'info';

interface ShowToastOptions {
	icon?: ReactNode;
	iconClass?: string;
	textClass?: string;
	bgColor?: string;
	borderColor?: string;
	time?: number;
}

// 3. Main function
export const showToast = (
	message: string,
	type: ToastType = 'info',
	options: ShowToastOptions = {}
): void => {
	const icons: Record<ToastType, ReactNode> = {
		success: <HiCheck className='text-green-400' />,
		failure: <HiX className='text-red-600' />,
		warning: <HiExclamation className='text-yellow-400' />,
		info: <HiInformationCircle className='text-blue-500' />,
	};

	const isMobile = window.innerWidth <= 640;

	toast(
		() => (
			// ({ closeToast }) => (
			<div className={`flex items-center ${isMobile ? 'gap-2' : 'gap-3'}`}>
				<div className={`text-3xl ${options.iconClass ?? ''}`}>
					{options.icon ?? icons[type]}
				</div>
				<div
					className={`${isMobile ? 'text-[15px]' : 'text-base'} font-medium ${
						options.textClass ?? 'text-gray-500 dark:text-gray-100'
					}`}
				>
					{message}
				</div>
			</div>
		),
		{
			position: isMobile ? 'top-right' : 'bottom-center',
			autoClose: options.time ?? 4300,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			style: {
				// background: options.bgColor ?? 'rgba(255, 255, 255, 0.3)',
				background: options.bgColor ?? '#374151',
				backdropFilter: 'blur(10px)',
				borderLeft: `${isMobile ? '3px' : '4px'} solid ${
					options.borderColor ?? getColorByType(type)
				}`,
				padding: isMobile ? '8px 12px' : '12px 16px',
				maxWidth: isMobile ? '70vw' : '420px',
				overflow: 'hidden',
				borderRadius: '8px',
				boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
			},
			icon: false,
		}
	);
};

// 4. Helper stays typed
const getColorByType = (type: ToastType): string => {
	switch (type) {
		case 'success':
			return '#22c55e'; // green-500
		case 'failure':
			return '#ef4444'; // red-500
		case 'warning':
			return '#facc15'; // yellow-500
		case 'info':
		default:
			return '#3b82f6'; // blue-500
	}
};
