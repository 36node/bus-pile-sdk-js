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
     * Get pile station statistics
     */
    getPileStationStatistics(
      req: GetPileStationStatisticsRequest
    ): Promise<GetPileStationStatisticsResponse>;
    /**
     * Get pile ns statistics
     */
    getPileNsStatistics(req: GetPileNsStatisticsRequest): Promise<GetPileNsStatisticsResponse>;
    /**
     * Get pile line statistics
     */
    getPileLineStatistics(
      req: GetPileLineStatisticsRequest
    ): Promise<GetPileLineStatisticsResponse>;
  }

  type ListStationsResponse = {
    body: Array<Station>;
    headers: {
      xTotalCount: string;
    };
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

  type GetPileStationStatisticsRequest = {
    query: {
      filter: {
        at: {
          $gt?: string;
          $lt?: string;
        };
      };
    };
  };

  type GetPileStationStatisticsResponse = {
    body: Array<PileStationStatistics>;
    headers: {
      xTotalCount: string;
    };
  };

  type GetPileNsStatisticsRequest = {
    query: {
      filter: {
        at: {
          $gt?: string;
          $lt?: string;
        };
      };
    };
  };

  type GetPileNsStatisticsResponse = {
    body: Array<PileNsStatistics>;
    headers: {
      xTotalCount: string;
    };
  };

  type GetPileLineStatisticsRequest = {
    query: {
      filter: {
        at: {
          $gt?: string;
          $lt?: string;
        };
      };
    };
  };

  type GetPileLineStatisticsResponse = {
    body: Array<PileLineStatistics>;
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

  type PileStationStatistics = {
    at: string;
    station: string;
    count: number;
    amout: number;
    lowAmout: number;
    highAmout: number;
    mediumAmout: number;
  };

  type PileNsStatistics = {
    at: string;
    ns: string;
    amout: number;
    lowAmout: number;
    highAmout: number;
    mediumAmout: number;
  };

  type PileLineStatistics = {
    at: string;
    ns: string;
    line: string;
    amout: number;
    lowAmout: number;
    highAmout: number;
    mediumAmout: number;
  };

  type Err = {
    code: string;
    message: string;
  };
}
