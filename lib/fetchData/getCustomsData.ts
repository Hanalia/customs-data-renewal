import { promises } from 'dns';

const axios = require('axios');

// 202211

// Helper function to safely trim and convert string to number
const safeNumberConvert = (value: string | undefined): number => {
  if (value) {
    const cleanedValue = value.trim().replace(/,/g, ''); // Remove commas
    const numberValue = +cleanedValue;
    return isNaN(numberValue) ? 0 : numberValue;
  }
  return 0;
};

export async function fetchTradeData(
  startDate: string,
  endDate: string,
  hsCode: string
): Promise<TradeItem[]> {
  const url = 'https://tradedata.go.kr/cts/hmpg/retrieveTrade.do';
  const headers = {
    Accept: 'application/json, text/javascript, */*; q=0.01',
    'Accept-Language':
      'ko-KR,ko;q=0.9,en;q=0.8,zh-CN;q=0.7,zh;q=0.6,en-US;q=0.5',
    Connection: 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    Origin: 'https://tradedata.go.kr',
    Referer: 'https://tradedata.go.kr/cts/index.do',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    isAjax: 'true',
    'sec-ch-ua':
      '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"'
  };
  const data = {
    tradeKind: 'ETS_MNK_1020000E',
    priodKind: 'MON',
    priodFr: startDate,
    priodTo: endDate,
    statsBase: 'acptDd',
    ttwgTpcd: '1000',
    showPagingLine: '1000',
    sortColumn: '',
    sortOrder: '',
    cntyNm: '',
    hsSgnGrpCol: 'HS10_SGN',
    hsSgnWhrCol: 'HS10_SGN',
    hsSgn: hsCode
  };

  const params = new URLSearchParams();
  Object.keys(data).forEach(key => {
    const dataKey = key as keyof typeof data;
    params.append(key, data[dataKey]);
  });

  try {
    const response = await axios({
      method: 'post',
      url: url,
      headers: headers,
      data: params
    });

    const items: TradeItem[] = response.data.items
      .map(processObject)
      .filter((item: TradeItem) => item.date.length == 10);
    return items;
  } catch (error) {
    console.error('Error:', error);

    return [];
  }
}
function processObject(input: any): TradeItem {
  // Convert date strings to 'YYYY-MM-DD' format
  const formatDate = (dateStr: string): string => {
    if (dateStr.length != 7) {
      return dateStr;
    }

    console.log({ dateStr });
    const [year, month] = dateStr.split('.');
    return `${year}-${month.padStart(2, '0')}-${'01'}`;
  };
  return {
    date: formatDate(input.priodTitle),
    hsCode: input.hsSgn,
    itemName: input.korePrlstNm,
    cntyCode: input.cntyCd,
    cntyName: input.cntyNm,
    expTtwg: safeNumberConvert(input.expoTtwg),
    expUsdAmt: safeNumberConvert(input.expUsdAmt),
    impTtwg: safeNumberConvert(input.impTtwg),
    impUsdAmt: safeNumberConvert(input.impUsdAmt)
  };
}
