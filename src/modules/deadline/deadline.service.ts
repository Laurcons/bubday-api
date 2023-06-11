import { Injectable } from "@nestjs/common";
import dayjs from "dayjs";

@Injectable()
export default class DeadlineService {
  // deadline = dayjs('2023-06-25T00:00:00+03:00');
  deadline = dayjs('2022-01-01');
  constructor() {}

  get() {
    return this.deadline;
  }

  isPast() {
    return dayjs().isAfter(this.deadline);
  }
}