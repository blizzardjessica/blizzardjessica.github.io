import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {StaticImageData} from "next/image";

export interface ImageItem {
    img: StaticImageData;
    title: string;
}

export interface ProjectImageListProps {
    itemData: ImageItem[];
    rowHeight: number;
    width: number;
}

export default function ProjectImageList({itemData, rowHeight, width}: ProjectImageListProps) {

    return (
        <ImageList sx={{ width, height: 450 }} cols={1} rowHeight={rowHeight}>
            {itemData.map((item) => (
                <ImageListItem key={item.img.src}>
                    <img
                        srcSet={`${item.img.src}`}
                        src={`${item.img.src}`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
