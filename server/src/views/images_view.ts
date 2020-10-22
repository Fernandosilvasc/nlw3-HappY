import Image from "../models/Image";

export default {

    render(image: Image) {
        return {
            id: image.id,
            // path: `http://localhost:${process.env.APP_PORT}/uploads/${image.path}`
            path: `http://192.168.1.66:3333/uploads/${image.path}`
        };
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }

}