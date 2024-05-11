import config from "../../../config/config";
import { authService } from "../auth";
import { HttpAuthService } from "./httpService";

class UploadAPI {
  constructor(private http: HttpAuthService) {}
  imageUpload() {
    const formData = new FormData();

    // for (let i = 0; i < image.length; i++) {
    //   formData.append("images", image[i]);
    // }
    return this.http.upload("api/file/upload", formData);
  }
}
const httpAuthService = new HttpAuthService(config.apiUrl, authService);
export const uploadAPI = new UploadAPI(httpAuthService);
