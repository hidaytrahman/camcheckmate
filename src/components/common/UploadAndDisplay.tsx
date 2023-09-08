import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from 'react-carbonui';

type UploadAndDisplayImageProps = {
    selectedImage: any;
    setSelectedImage: (param: any) => void;
};
const UploadAndDisplayImage = ({
    selectedImage,
    setSelectedImage,
}: UploadAndDisplayImageProps) => {
    return (
        <div>
            {selectedImage && (
                <div className="relative text-center flex items-center justify-center">
                    <img
                        alt="not found"
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <Button
                        className="absolute bottom-0"
                        variant="secondary"
                        onClick={() => setSelectedImage(null)}
                    >
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Button>
                </div>
            )}

            <br />
            <hr className="divide-x" />
            <br />

            <input
                type="file"
                name="myImage"
                id="imageSelection"
                onChange={(event) => {
                    // @ts-ignore
                    console.log(event.target.files[0]);
                    // @ts-ignore
                    setSelectedImage(event.target.files[0]);
                }}
            />

            <label htmlFor="imageSelection" className="btn-2">
                {selectedImage !== null ? 'Upload another ' : 'Upload Now'}
            </label>
        </div>
    );
};

export default UploadAndDisplayImage;
