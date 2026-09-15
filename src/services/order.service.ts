import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { ICart } from "@/types/Ticket";

const orderService = {
  createOrder: (payload: ICart) => instance.post(`${endpoint.ORDER}`, payload),
};

export default orderService;
