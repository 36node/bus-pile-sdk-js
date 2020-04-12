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
  sgcc: SDK.SgccAPI;
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
    /**
     * Get pile by pile id
     */
    getPile(req: GetPileRequest): Promise<GetPileResponse>;
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
  export interface SgccAPI {
    /**
     * List all sgcc records
     */
    listSgccRecords(req: ListSgccRecordsRequest): Promise<ListSgccRecordsResponse>;
    /**
     * Create a sgcc record
     */
    createSgccRecord(req: CreateSgccRecordRequest): Promise<CreateSgccRecordResponse>;
    /**
     * List all distinct field of sgcc data
     */
    listSgccField(req: ListSgccFieldRequest): Promise<ListSgccFieldResponse>;
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
    body: [Notification];
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
    body: [Pile];
    headers: {
      xTotalCount: number;
    };
  };

  type GetPileRequest = {
    pileId: string;
  };

  type GetPileResponse = {
    body: Pile;
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
    body: [Station];
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
    body: [ChargingOrder];
    headers: {
      xTotalCount: number;
    };
  };

  type ListSgccRecordsRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      populate?: string;
      select?: string;

      filter: {
        station?: string;
        startAt: {
          $lte?: string;
          $gte?: string;
        };
        vehicleNo?: string;
        department?: string;
        period?: string;
      };
    };
  };

  type ListSgccRecordsResponse = {
    body: [SgccRecord];
    headers: {
      xTotalCount: number;
    };
  };

  type CreateSgccRecordRequest = {
    body: SgccRecord;
  };

  type CreateSgccRecordResponse = {
    body: SgccRecord;
  };

  type ListSgccFieldRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: string;

      filter: {
        name?: string;
      };
    };
  };

  type ListSgccFieldResponse = {
    body: [SgccField];
    headers: {
      xTotalCount: number;
    };
  };

  type NotificationDoc = {};
  type AnyObject = {};
  type Pile = {};
  type Station = {};
  type ChargingOrder = {};
  type SgccRecord = Object;
  type SgccField = Object;
  type Notification = {
    id: string;
  };
  type NotificationOrDoc =
    | {}
    | {
        id: string;
      };
  type Err = {
    code: string;
    message: string;
  };
}
