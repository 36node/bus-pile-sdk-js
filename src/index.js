import fetch from "@36node/fetch";
import { denormalize } from "@36node/query-normalizr";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    if (this.token) {
      return `Bearer ${this.token}`;
    }

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = {}) {
    this.base = opt.base || "";
    this.token = opt.token || "";
  }

  /**
   * station's methods
   */
  station = {
    /**
     * List all stations
     *
     * @param {ListStationsRequest} req listStations request
     * @returns {Promise<ListStationsResponse>} A paged array of stations
     */
    listStations: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/stations`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get station by id
     *
     * @param {GetStationRequest} req getStation request
     * @returns {Promise<GetStationResponse>} The station with given id
     */
    getStation: (req = {}) => {
      const { stationId, headers } = req;

      if (!stationId) throw new Error("stationId is required for getStation");

      return fetch(`${this.base}/stations/${stationId}`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * pile's methods
   */
  pile = {
    /**
     * List all piles
     *
     * @param {ListPilesRequest} req listPiles request
     * @returns {Promise<ListPilesResponse>} A paged array of piles
     */
    listPiles: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/piles`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get pile by id
     *
     * @param {GetPileRequest} req getPile request
     * @returns {Promise<GetPileResponse>} The pile with given id
     */
    getPile: (req = {}) => {
      const { pileId, headers } = req;

      if (!pileId) throw new Error("pileId is required for getPile");

      return fetch(`${this.base}/piles/${pileId}`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * statistics's methods
   */
  statistics = {
    /**
     * Get pile statistics
     *
     * @param {GetPileStatisticsRequest} req getPileStatistics request
     * @returns {Promise<GetPileStatisticsResponse>} Pile statistics
     */
    getPileStatistics: (req = {}) => {
      const { headers } = req;

      return fetch(`${this.base}/statistics`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get aggregation charge statistics
     *
     * @param {GetChargeAggsRequest} req getChargeAggs request
     * @returns {Promise<GetChargeAggsResponse>} Pile station statistics
     */
    getChargeAggs: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for statistics");

      return fetch(`${this.base}/chargeAggs`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
}
