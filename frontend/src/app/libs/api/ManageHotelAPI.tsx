import { HttpAuthService } from "./httpService";
import { authService } from "../auth";
import config from "../../../config/config";

class ManageHotelAPI {
  constructor(private http: HttpAuthService) {}

  createHotel(payload: API.HotelFormData) {
    return this.http.post<{ message: string }>(
      "api/dashboard/hotel/create-hotel",
      payload
    );
  }

  hotelList() {
    return this.http.get<API.HotelResponse>("api/dashboard/hotel/hotel-list");
  }

  updateHotel(id: string, payload: API.HotelFormData) {
    return this.http.put<{ message: string }>(
      `api/dashboard/hotel/edit-hotel/${id}`,
      payload
    );
  }
}
const httpAuthService = new HttpAuthService(config.apiUrl, authService);
export const manageHotelAPI = new ManageHotelAPI(httpAuthService);
