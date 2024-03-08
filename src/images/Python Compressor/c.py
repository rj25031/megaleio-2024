from PIL import Image

def compress_to_webp(input_image_path, output_image_path, quality=10):
    """
    Compresses an image to WebP format.

    Parameters:
    input_image_path (str): The path to the input image.
    output_image_path (str): The path to save the compressed image.
    quality (int): The quality of the compressed image (0-100), default is 80.
    """
    try:
        with Image.open(input_image_path) as img:
            img.save(output_image_path, 'WEBP', quality=quality)
            print("Image compressed successfully to WebP format.")
    except Exception as e:
        print(f"An error occurred: {e}")

compress_to_webp("final.webp","Assets/final.webp")