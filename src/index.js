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
    let token = this.token;
    if (typeof token === "function") token = token();
    if (token) return `Bearer ${token}`;

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
   * telaidian's methods
   */
  telaidian = {
    /**
     * Query token
     *
     * @param {QueryTokenRequest} req queryToken request
     * @returns {Promise<QueryTokenResponse>} The token created
     */
    queryToken: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for queryToken");

      return fetch(`${this.base}/telaidian/query_token`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create a notification
     *
     * @param {CreateNotificationStationStatusRequest} req createNotificationStationStatus request
     * @returns {Promise<CreateNotificationStationStatusResponse>} The Notification created
     */
    createNotificationStationStatus: (req = {}) => {
      const { headers, body } = req;

      if (!body)
        throw new Error(
          "requetBody is required for createNotificationStationStatus"
        );

      return fetch(`${this.base}/telaidian/notification_stationStatus`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * notification's methods
   */
  notification = {
    /**
     * List all notifications
     *
     * @param {ListNotificationsRequest} req listNotifications request
     * @returns {Promise<ListNotificationsResponse>} A paged array of notifications
     */
    listNotifications: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/notifications`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create a notification
     *
     * @param {CreateNotificationRequest} req createNotification request
     * @returns {Promise<CreateNotificationResponse>} The Notification created
     */
    createNotification: (req = {}) => {
      const { headers, body } = req;

      if (!body)
        throw new Error("requetBody is required for createNotification");

      return fetch(`${this.base}/notifications`, {
        method: "POST",
        body,
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
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * station's methods
   */
  station = {
    /**
     * List all stations
     *
     * @param {ListStationsRequest} req listStations request
     * @returns {Promise<ListStationsResponse>} A paged array of station
     */
    listStations: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/stations`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get station by station id
     *
     * @param {GetStationRequest} req getStation request
     * @returns {Promise<GetStationResponse>} The station with given stationId
     */
    getStation: (req = {}) => {
      const { stationId, headers } = req;

      if (!stationId) throw new Error("stationId is required for getStation");

      return fetch(`${this.base}/stations/${stationId}`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * chargingOrder's methods
   */
  chargingOrder = {
    /**
     * List all charging orders
     *
     * @param {ListChargingOrdersRequest} req listChargingOrders request
     * @returns {Promise<ListChargingOrdersResponse>} A paged array of charging orders
     */
    listChargingOrders: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/charging-orders`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
}
