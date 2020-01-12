export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  telaidian: SDK.TelaidianAPI;
  notification: SDK.NotificationAPI;
  pile: SDK.PileAPI;
  station: SDK.StationAPI;
  chargingOrder: SDK.ChargingOrderAPI;
}

declare namespace SDK {
  export interface Options {
    base?: string;
    token?: string;
  }

  export interface TelaidianAPI {
    /**
     * Query token
     */
    queryToken(req: QueryTokenRequest): Promise<QueryTokenResponse>;
    /**
     * Create a notification
     */
    createNotificationStationStatus(
      req: CreateNotificationStationStatusRequest
    ): Promise<CreateNotificationStationStatusResponse>;
  }
  export interface NotificationAPI {
    /**
     * List all notifications
     */
    listNotifications(req: ListNotificationsRequest): Promise<ListNotificationsResponse>;
    /**
     * Create a notification
     */
    createNotification(req: CreateNotificationRequest): Promise<CreateNotificationResponse>;
  }
  export interface PileAPI {
    /**
     * List all piles
     */
    listPiles(req: ListPilesRequest): Promise<ListPilesResponse>;
  }
  export interface StationAPI {
    /**
     * List all stations
     */
    listStations(req: ListStationsRequest): Promise<ListStationsResponse>;
    /**
     * Get station by station id
     */
    getStation(req: GetStationRequest): Promise<GetStationResponse>;
  }
  export interface ChargingOrderAPI {
    /**
     * List all charging orders
     */
    listChargingOrders(req: ListChargingOrdersRequest): Promise<ListChargingOrdersResponse>;
  }

  type QueryTokenRequest = {
    body: AnyObject;
  };

  type QueryTokenResponse = {
    body: AnyObject;
  };

  type CreateNotificationStationStatusRequest = {
    body: AnyObject;
  };

  type CreateNotificationStationStatusResponse = {
    body: AnyObject;
  };

  type ListNotificationsRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: string;
    };
  };

  type ListNotificationsResponse = {
    body: Array<Notification>;
    headers: {
      xTotalCount: number;
    };
  };

  type CreateNotificationRequest = {
    body: NotificationDoc;
  };

  type CreateNotificationResponse = {
    body: AnyObject;
  };

  type ListPilesRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      populate?: string;
      select?: string;

      filter: {
        status?: string;
        equipmentModel?: string;
        producer?: string;
        type?: string;
      };
    };
  };

  type ListPilesResponse = {
    body: Array<Pile>;
    headers: {
      xTotalCount: number;
    };
  };

  type ListStationsRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      populate?: string;
      select?: string;
    };
  };

  type ListStationsResponse = {
    body: Array<Station>;
    headers: {
      xTotalCount: number;
    };
  };

  type GetStationRequest = {
    stationId: string;
  };

  type GetStationResponse = {
    body: Station;
  };

  type ListChargingOrdersRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      populate?: string;
      select?: string;

      filter: {
        station?: string;
        vehicle?: string;
        driverName?: string;
        startAt: {
          $lte?: string;
          $gte?: string;
        };
        ns?: string;
        vehicleNo?: string;
        pile?: string;
      };
    };
  };

  type ListChargingOrdersResponse = {
    body: Array<ChargingOrder>;
    headers: {
      xTotalCount: number;
    };
  };

  type Notification = {
    id: string;
  };

  type Err = {
    code: string;
    message: string;
  };
}
