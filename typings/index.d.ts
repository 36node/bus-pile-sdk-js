export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  station: SDK.StationAPI;
  pile: SDK.PileAPI;
  statistics: SDK.StatisticsAPI;
}

declare namespace SDK {
  export interface Options {
    base?: string;
    token?: string;
  }

  export interface StationAPI {
    /**
     * List all stations
     */
    listStations(req: ListStationsRequest): Promise<ListStationsResponse>;
    /**
     * Get station by id
     */
    getStation(req: GetStationRequest): Promise<GetStationResponse>;
  }
  export interface PileAPI {
    /**
     * List all piles
     */
    listPiles(req: ListPilesRequest): Promise<ListPilesResponse>;
    /**
     * Get pile by id
     */
    getPile(req: GetPileRequest): Promise<GetPileResponse>;
  }
  export interface StatisticsAPI {
    /**
     * Get pile statistics
     */
    getPileStatistics(req: GetPileStatisticsRequest): Promise<GetPileStatisticsResponse>;
    /**
     * Get aggregation charge statistics
     */
    getChargeAggs(req: GetChargeAggsRequest): Promise<GetChargeAggsResponse>;
  }

  type ListStationsRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: number;
    };
  };

  type ListStationsResponse = {
    body: Array<Station>;
    headers: {
      xTotalCount: string;
    };
  };

  type GetStationRequest = {
    stationId: string;
  };

  type GetStationResponse = {
    body: Station;
  };

  type ListPilesRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: number;

      filter: {
        station?: string;
        ns: {
          $regex?: string;
        };
        line?: string;
        pileNo?: string;
        status?: string;
        type?: string;
        alertLevel?: string;
        vehicleNo?: string;
        startAt: {
          $gt?: string;
          $lt?: string;
        };
        endAt: {
          $gt?: string;
          $lt?: string;
        };
      };
    };
  };

  type ListPilesResponse = {
    body: Array<Pile>;
    headers: {
      xTotalCount: string;
    };
  };

  type GetPileRequest = {
    pileId: string;
  };

  type GetPileResponse = {
    body: Pile;
  };

  type GetPileStatisticsResponse = {
    body: Array<PileStatistics>;
    headers: {
      xTotalCount: string;
    };
  };

  type GetChargeAggsRequest = {
    query: {
      select: string;
      group: string;

      filter: {
        at: {
          $gt?: string;
          $lt?: string;
        };
      };
    };
  };

  type GetChargeAggsResponse = {
    body: Array<ChargeAggs>;
    headers: {
      xTotalCount: string;
    };
  };

  type Station = {
    id: string;
    createdAt: string;
    updatedAt: string;
    deleted: boolean;
    deletedAt: string;
    name: string;
    address: string;
    location: {
      lng: number;
      lat: number;
    };
    power: string;
    outPower: string;
    usingCount: Number;
    emptyCount: Number;
    brokenCount: Number;
    level3Count: Number;
    level2Count: Number;
    level1Count: Number;
    chargingVehicles: Number;
    chargingACVehicles: Number;
    chargingDCVehicles: Number;
  };

  type Pile = {
    id: string;
    createdAt: string;
    updatedAt: string;
    deleted: boolean;
    deletedAt: string;
    ns: Array<string>;
    producer: string;
    model: string;
    startAt: string;
    endAt: string;
    pileNo: string;
    station: string;
    line: string;
    vehicleNo: string;
    alertLevel: string;
    status: string;
    type: string;
    startSoc: string;
    endSoc: string;
    chargingAmount: string;
    voltage: string;
    current: string;
    power: string;
    duration: string;
  };

  type PileStatistics = {
    using: number;
    empty: number;
    broken: number;
  };

  type ChargeAggs = {
    at: string;
    station: string;
    ns: string;
    line: string;
    count: number;
    amout: number;
    lowAmout: number;
    highAmout: number;
    mediumAmout: number;
  };

  type GeoLocation = {
    lng: number;
    lat: number;
  };

  type Err = {
    code: string;
    message: string;
  };
}
