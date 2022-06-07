import axios from "axios";
import React from "react";

export class catService extends React.Component {
  static async getAll(limit, page) {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
        {
          params: {
            limit: limit,
            page: page,
          },
        }
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

export default catService;
