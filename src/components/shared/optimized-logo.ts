import logo from '@/images/logo.png';
import { getImage } from 'astro:assets';

export const getOptimizedFavicon = async () => {
    return await getImage({
        src: logo,
        width: 36,
        height: 36,
        format: 'webp'
    });
};
export const getOptimizedLogo = async () => {
    return await getImage({
        src: logo,
        width: 72,
        height: 72,
        format: 'webp'
    });
};
