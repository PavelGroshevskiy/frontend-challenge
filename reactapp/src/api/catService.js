import axios from "axios";
import React from "react";

export class catService extends React.Component {
  static async getAll() {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search?limit=20",
        {}
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

export default catService;
