import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOfficeRentFiles = createAsyncThunk(
  "ofrent/fetch/pending",
  async () => {
    const options = {
      method: "GET",
      url: "http://localhost:3005/OficRentFiles",
    };
    // await puse(1000);

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
const puse = (duration: any) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
