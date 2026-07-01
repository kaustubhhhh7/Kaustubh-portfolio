import { StaticImageData } from 'next/image'

import photo0 from '../img a/0.jpg'
import photo1 from '../img a/1.jpg'
import photo2 from '../img a/2.jpg'
import photo3 from '../img a/3.jpg'
import photo5 from '../img a/5.jpg'
import photo6 from '../img a/6.jpg'
import photo7 from '../img a/7.jpg'

type TechPhoto = {
    src: string | StaticImageData
    alt: string
}

export const techPhotos: TechPhoto[] = [
    {
        src: photo0,
        alt: 'Tech Experience - Image 0'
    },
    {
        src: photo1,
        alt: 'Tech Experience - Image 1'
    },
    {
        src: photo2,
        alt: 'Tech Experience - Image 2'
    },
    {
        src: photo3,
        alt: 'Tech Experience - Image 3'
    },
    {
        src: photo5,
        alt: 'Tech Experience - Image 5'
    },
    {
        src: photo6,
        alt: 'Tech Experience - Image 6'
    },
    {
        src: photo7,
        alt: 'Tech Experience - Image 7'
    }
]

