const GA4_DATA = [{"date": "2026-03-23", "sessions": 1917, "users": 1649, "transactions": 55}, {"date": "2026-03-24", "sessions": 1586, "users": 1333, "transactions": 35}, {"date": "2026-03-25", "sessions": 1677, "users": 1424, "transactions": 49}, {"date": "2026-03-26", "sessions": 1791, "users": 1518, "transactions": 31}, {"date": "2026-03-27", "sessions": 1697, "users": 1402, "transactions": 44}, {"date": "2026-03-28", "sessions": 1920, "users": 1609, "transactions": 53}, {"date": "2026-03-29", "sessions": 2082, "users": 1740, "transactions": 51}, {"date": "2026-03-30", "sessions": 1847, "users": 1579, "transactions": 49}, {"date": "2026-03-31", "sessions": 1652, "users": 1387, "transactions": 39}, {"date": "2026-04-01", "sessions": 1647, "users": 1385, "transactions": 38}, {"date": "2026-04-02", "sessions": 1499, "users": 1206, "transactions": 48}, {"date": "2026-04-03", "sessions": 1538, "users": 1286, "transactions": 41}, {"date": "2026-04-04", "sessions": 1815, "users": 1521, "transactions": 37}, {"date": "2026-04-05", "sessions": 2095, "users": 1758, "transactions": 52}];
const META_DAILY_DATA = [{"date": "2026-03-23", "spend": 3042.27, "impressions": 108375, "clicks": 2798, "ctr": 0.0258, "cpc": 1.0873, "cpm": 28.0752}, {"date": "2026-03-24", "spend": 2787.42, "impressions": 91907, "clicks": 2275, "ctr": 0.0248, "cpc": 1.2252, "cpm": 30.3291}, {"date": "2026-03-25", "spend": 2920.16, "impressions": 93150, "clicks": 2602, "ctr": 0.0279, "cpc": 1.1223, "cpm": 31.3464}, {"date": "2026-03-26", "spend": 2834.09, "impressions": 89664, "clicks": 2601, "ctr": 0.029, "cpc": 1.0896, "cpm": 31.6097}, {"date": "2026-03-27", "spend": 2812.05, "impressions": 87622, "clicks": 2645, "ctr": 0.0302, "cpc": 1.0632, "cpm": 32.0924}, {"date": "2026-03-28", "spend": 2728.38, "impressions": 87415, "clicks": 2379, "ctr": 0.0272, "cpc": 1.1469, "cpm": 31.2111}, {"date": "2026-03-29", "spend": 3194.23, "impressions": 105864, "clicks": 2952, "ctr": 0.0279, "cpc": 1.082, "cpm": 30.175}, {"date": "2026-03-30", "spend": 2674.26, "impressions": 95387, "clicks": 2614, "ctr": 0.0274, "cpc": 1.0231, "cpm": 28.0369}, {"date": "2026-03-31", "spend": 2981.43, "impressions": 96304, "clicks": 2730, "ctr": 0.0283, "cpc": 1.0921, "cpm": 30.9589}, {"date": "2026-04-01", "spend": 2842.77, "impressions": 90920, "clicks": 2578, "ctr": 0.0284, "cpc": 1.1028, "cpm": 31.2661}, {"date": "2026-04-02", "spend": 2736.41, "impressions": 78989, "clicks": 1975, "ctr": 0.025, "cpc": 1.3854, "cpm": 34.6429}, {"date": "2026-04-03", "spend": 3037.78, "impressions": 91480, "clicks": 2474, "ctr": 0.027, "cpc": 1.2278, "cpm": 33.2073}, {"date": "2026-04-04", "spend": 2768.44, "impressions": 86700, "clicks": 2275, "ctr": 0.0262, "cpc": 1.2169, "cpm": 31.9312}, {"date": "2026-04-05", "spend": 3146.97, "impressions": 107846, "clicks": 3155, "ctr": 0.0293, "cpc": 0.9975, "cpm": 29.1825}];
const META_CAMPAIGNS = [{"campaign": "CAMPAIGN 3 | 2026 | TOF | ABO | WINNING ADS", "spend": 4860.51, "impressions": 184415, "clicks": 6836, "ctr": 0.0371, "cpc": 0.711, "cpm": 26.3564}, {"campaign": "CAMPAIGN 1 | 2026 | TOF | ABO | BROAD", "spend": 4046.15, "impressions": 107444, "clicks": 3023, "ctr": 0.0281, "cpc": 1.3385, "cpm": 37.6582}, {"campaign": "CAMPAIGN 2 | 2026 | TOF | ABO | BROAD", "spend": 3830.68, "impressions": 132802, "clicks": 2459, "ctr": 0.0185, "cpc": 1.5578, "cpm": 28.845}, {"campaign": "CAMPAIGN A | TOF | CBO | Soundbar | LEGACY", "spend": 2243.1, "impressions": 63776, "clicks": 1320, "ctr": 0.0207, "cpc": 1.6993, "cpm": 35.1715}, {"campaign": "TOF - Conversions - Broad - STRAIGHT TO PRODUCT PAGE (TEST)", "spend": 1725.6, "impressions": 54812, "clicks": 1483, "ctr": 0.0271, "cpc": 1.1636, "cpm": 31.4822}, {"campaign": "CAMPAIGN 4 | MOF | CBO | HangSmart TV", "spend": 1567.3, "impressions": 59953, "clicks": 1575, "ctr": 0.0263, "cpc": 0.9951, "cpm": 26.1421}, {"campaign": "CAMPAIGN 5 | BOF | CBO | HangSmart TV", "spend": 1398.05, "impressions": 30497, "clicks": 914, "ctr": 0.03, "cpc": 1.5296, "cpm": 45.8422}, {"campaign": "CAMPAIGN B | MOF & BOF | ABO | Soundbar", "spend": 516.67, "impressions": 13927, "clicks": 191, "ctr": 0.0137, "cpc": 2.7051, "cpm": 37.0984}];
const GOOGLE_ADS_DATA = [{"date": "2026-03-23", "campaign": "Brand | New", "spend": 91.14, "impressions": 498, "clicks": 27, "conversions": 0, "ctr": 0.0542, "cpc": 3.38}, {"date": "2026-03-23", "campaign": "Performance Max | Hangsmart TV | Top 10 States", "spend": 319.13, "impressions": 11294, "clicks": 187, "conversions": 5.98, "ctr": 0.0166, "cpc": 1.71}, {"date": "2026-03-23", "campaign": "Performance Max | Brand", "spend": 108.72, "impressions": 4956, "clicks": 64, "conversions": 2.32, "ctr": 0.0129, "cpc": 1.7}, {"date": "2026-03-23", "campaign": "Performance Max | Hangsmart TV | 40 states", "spend": 48.56, "impressions": 2957, "clicks": 40, "conversions": 1, "ctr": 0.0135, "cpc": 1.21}, {"date": "2026-03-24", "campaign": "Brand | New", "spend": 91.61, "impressions": 233, "clicks": 15, "conversions": 0, "ctr": 0.0644, "cpc": 6.11}, {"date": "2026-03-24", "campaign": "Performance Max | Hangsmart TV | Top 10 States", "spend": 117.5, "impressions": 4272, "clicks": 67, "conversions": 1, "ctr": 0.0157, "cpc": 1.75}, {"date": "2026-03-24", "campaign": "Performance Max | Brand", "spend": 186.3, "impressions": 9835, "clicks": 106, "conversions": 1.33, "ctr": 0.0108, "cpc": 1.76}, {"date": "2026-03-24", "campaign": "Performance Max | Hangsmart TV | 40 states", "spend": 97.43, "impressions": 5885, "clicks": 70, "conversions": 2, "ctr": 0.0119, "cpc": 1.39}, {"date": "2026-03-25", "campaign": "Brand | New", "spend": 89.96, "impressions": 614, "clicks": 34, "conversions": 0, "ctr": 0.0554, "cpc": 2.65}, {"date": "2026-03-25", "campaign": "Performance Max | Hangsmart TV | Top 10 States", "spend": 256.79, "impressions": 9749, "clicks": 131, "conversions": 5, "ctr": 0.0134, "cpc": 1.96}, {"date": "2026-03-25", "campaign": "Performance Max | Brand", "spend": 136.36, "impressions": 4575, "clicks": 70, "conversions": 2, "ctr": 0.0153, "cpc": 1.95}, {"date": "2026-03-25", "campaign": "Performance Max | Hangsmart TV | 40 states", "spend": 57.47, "impressions": 4109, "clicks": 45, "conversions": 2.5, "ctr": 0.0109, "cpc": 1.28}, {"date": "2026-03-26", "campaign": "Brand | New", "spend": 74.23, "impressions": 575, "clicks": 32, "conversions": 0, "ctr": 0.0556, "cpc": 2.32}, {"date": "2026-03-26", "campaign": "Performance Max | Hangsmart TV | Top 10 States", "spend": 247.82, "impressions": 10201, "clicks": 152, "conversions": 8.02, "ctr": 0.0149, "cpc": 1.63}, {"date": "2026-03-26", "campaign": "Performance Max | Brand", "spend": 151.89, "impressions": 6239, "clicks": 87, "conversions": 4, "ctr": 0.0139, "cpc": 1.75}, {"date": "2026-03-26", "campaign": "Performance Max | Hangsmart TV | 40 states", "spend": 91.61, "impressions": 2647, "clicks": 62, "conversions": 1.5, "ctr": 0.0234, "cpc": 1.48}, {"date": "2026-03-27", "campaign": "Brand | New", "spend": 99.04, "impressions": 662, "clicks": 30, "conversions": 1, "ctr": 0.0453, "cpc": 3.3}, {"date": "2026-03-27", "campaign": "Performance Max | Hangsmart TV | Top 10 States", "spend": 231.92, "impressions": 8788, "clicks": 143, "conversions": 10.63, "ctr": 0.0163, "cpc": 1.62}, {"date": "2026-03-27", "campaign": "Performance Max | Brand", "spend": 198.21, "impressions": 9221, "clicks": 115, "conversions": 0.33, "ctr": 0.0125, "cpc": 1.72}, {"date": "2026-03-27", "campaign": "Performance Max | Hangsmart TV | 40 states", "spend": 60.16, "impressions": 2427, "clicks": 37, "conversions": 0, "ctr": 0.0152, "cpc": 1.63}, {"date": "2026-03-28", "campaign": "Brand | New", "spend": 118.85, "impressions": 784, "clicks": 41, "conversions": 3, "ctr": 0.0523, "cpc": 2.9}, {"date": "2026-03-28", "campaign": "Performance Max | Hangsmart TV | Top 10 States", "spend": 445.45, "impressions": 14324, "clicks": 242, "conversions": 4.34, "ctr": 0.0169, "cpc": 1.84}, {"date": "2026-03-28", "campaign": "Performance Max | Brand", "spend": 126.61, "impressions": 6264, "clicks": 97, "conversions": 3, "ctr": 0.0155, "cpc": 1.31}, {"date": "2026-03-28", "campaign": "Performance Max | Hangsmart TV | 40 states", "spend": 101.05, "impressions": 5352, "clicks": 81, "conversions": 2, "ctr": 0.0151, "cpc": 1.25}, {"date": "2026-03-29", "campaign": "Brand | New", "spend": 95.23, "impressions": 852, "clicks": 42, "conversions": 0, "ctr": 0.0493, "cpc": 2.27}, {"date": "2026-03-29", "campaign": "Performance Max | Hangsmart TV | Top 10 States", "spend": 369.47, "impressions": 15543, "clicks": 250, "conversions": 10, "ctr": 0.0161, "cpc": 1.48}, {"date": "2026-03-29", "campaign": "Performance Max | Brand", "spend": 123.16, "impressions": 6521, "clicks": 79, "conversions": 3, "ctr": 0.0121, "cpc": 1.56}, {"date": "2026-03-29", "campaign": "Performance Max | Hangsmart TV | 40 states", "spend": 46.66, "impressions": 2401, "clicks": 39, "conversions": 0, "ctr": 0.0162, "cpc": 1.2}, {"date": "2026-03-30", "campaign": "Brand | New", "spend": 78.0, "impressions": 338, "clicks": 20, "conversions": 1, "ctr": 0.0592, "cpc": 3.9}, {"date": "2026-03-30", "campaign": "Performance Max | Hangsmart TV | Top 10 States", "spend": 303.06, "impressions": 12301, "clicks": 208, "conversions": 1.98, "ctr": 0.0169, "cpc": 1.46}, {"date": "2026-03-30", "campaign": "Performance Max | Brand", "spend": 117.15, "impressions": 5458, "clicks": 79, "conversions": 1, "ctr": 0.0145, "cpc": 1.48}, {"date": "2026-03-30", "campaign": "Performance Max | Hangsmart TV | 40 states", "spend": 58.66, "impressions": 2310, "clicks": 50, "conversions": 5, "ctr": 0.0216, "cpc": 1.17}, {"date": "2026-03-31", "campaign": "Brand | New", "spend": 76.09, "impressions": 638, "clicks": 24, "conversions": 1, "ctr": 0.0376, "cpc": 3.17}, {"date": "2026-03-31", "campaign": "Performance Max | Hangsmart TV | Top 10 States", "spend": 169.94, "impressions": 7807, "clicks": 129, "conversions": 2, "ctr": 0.0165, "cpc": 1.32}, {"date": "2026-03-31", "campaign": "Performance Max | Brand", "spend": 142.25, "impressions": 5825, "clicks": 82, "conversions": 2, "ctr": 0.0141, "cpc": 1.73}, {"date": "2026-03-31", "campaign": "Performance Max | Hangsmart TV | 40 states", "spend": 85.02, "impressions": 5167, "clicks": 65, "conversions": 2, "ctr": 0.0126, "cpc": 1.31}, {"date": "2026-04-01", "campaign": "Brand | New", "spend": 98.41, "impressions": 583, "clicks": 28, "conversions": 0, "ctr": 0.048, "cpc": 3.51}, {"date": "2026-04-01", "campaign": "Performance Max | Hangsmart TV | Top 10 States", "spend": 157.79, "impressions": 6212, "clicks": 102, "conversions": 3, "ctr": 0.0164, "cpc": 1.55}, {"date": "2026-04-01", "campaign": "Performance Max | Brand", "spend": 153.99, "impressions": 6424, "clicks": 118, "conversions": 1, "ctr": 0.0184, "cpc": 1.31}, {"date": "2026-04-01", "campaign": "Performance Max | Hangsmart TV | 40 states", "spend": 72.92, "impressions": 3491, "clicks": 52, "conversions": 0, "ctr": 0.0149, "cpc": 1.4}, {"date": "2026-04-02", "campaign": "Brand | New", "spend": 60.99, "impressions": 505, "clicks": 20, "conversions": 0, "ctr": 0.0396, "cpc": 3.05}, {"date": "2026-04-02", "campaign": "Performance Max | Hangsmart TV | Top 10 States", "spend": 171.19, "impressions": 3421, "clicks": 96, "conversions": 2, "ctr": 0.0281, "cpc": 1.78}, {"date": "2026-04-02", "campaign": "Performance Max | Brand", "spend": 157.07, "impressions": 8979, "clicks": 118, "conversions": 4.98, "ctr": 0.0131, "cpc": 1.33}, {"date": "2026-04-02", "campaign": "Performance Max | Hangsmart TV | 40 states", "spend": 53.1, "impressions": 2695, "clicks": 50, "conversions": 0, "ctr": 0.0186, "cpc": 1.06}, {"date": "2026-04-03", "campaign": "Brand | New", "spend": 53.89, "impressions": 669, "clicks": 29, "conversions": 0, "ctr": 0.0433, "cpc": 1.86}, {"date": "2026-04-03", "campaign": "Performance Max | Hangsmart TV | Top 10 States", "spend": 142.97, "impressions": 3031, "clicks": 81, "conversions": 3, "ctr": 0.0267, "cpc": 1.77}, {"date": "2026-04-03", "campaign": "Performance Max | Brand", "spend": 171.99, "impressions": 8270, "clicks": 106, "conversions": 6, "ctr": 0.0128, "cpc": 1.62}, {"date": "2026-04-03", "campaign": "Performance Max | Hangsmart TV | 40 states", "spend": 106.54, "impressions": 4820, "clicks": 57, "conversions": 1, "ctr": 0.0118, "cpc": 1.87}, {"date": "2026-04-04", "campaign": "Brand | New", "spend": 121.9, "impressions": 697, "clicks": 38, "conversions": 0, "ctr": 0.0545, "cpc": 3.21}, {"date": "2026-04-04", "campaign": "Performance Max | Hangsmart TV | Top 10 States", "spend": 251.82, "impressions": 9468, "clicks": 162, "conversions": 4, "ctr": 0.0171, "cpc": 1.55}, {"date": "2026-04-04", "campaign": "Performance Max | Brand", "spend": 149.89, "impressions": 8095, "clicks": 110, "conversions": 2, "ctr": 0.0136, "cpc": 1.36}, {"date": "2026-04-04", "campaign": "Performance Max | Hangsmart TV | 40 states", "spend": 78.02, "impressions": 3198, "clicks": 57, "conversions": 0, "ctr": 0.0178, "cpc": 1.37}, {"date": "2026-04-05", "campaign": "Brand | New", "spend": 97.56, "impressions": 667, "clicks": 40, "conversions": 0, "ctr": 0.06, "cpc": 2.44}, {"date": "2026-04-05", "campaign": "Performance Max | Hangsmart TV | Top 10 States", "spend": 312.17, "impressions": 7134, "clicks": 165, "conversions": 4, "ctr": 0.0231, "cpc": 1.89}, {"date": "2026-04-05", "campaign": "Performance Max | Brand", "spend": 148.32, "impressions": 7037, "clicks": 101, "conversions": 6, "ctr": 0.0143, "cpc": 1.47}, {"date": "2026-04-05", "campaign": "Performance Max | Hangsmart TV | 40 states", "spend": 87.41, "impressions": 4665, "clicks": 61, "conversions": 1, "ctr": 0.0131, "cpc": 1.43}];
const SHOPIFY_DATA = [{"date": "2026-03-23", "orders": 63}, {"date": "2026-03-24", "orders": 37}, {"date": "2026-03-25", "orders": 56}, {"date": "2026-03-26", "orders": 36}, {"date": "2026-03-27", "orders": 47}, {"date": "2026-03-28", "orders": 55}, {"date": "2026-03-29", "orders": 56}, {"date": "2026-03-30", "orders": 47}, {"date": "2026-03-31", "orders": 43}, {"date": "2026-04-01", "orders": 46}, {"date": "2026-04-02", "orders": 53}, {"date": "2026-04-03", "orders": 46}, {"date": "2026-04-04", "orders": 43}, {"date": "2026-04-05", "orders": 56}];
const TIKTOK_DATA = [{"date": "2026-03-23", "video_views": 1366, "likes": 4, "shares": 3, "comments": 0}, {"date": "2026-03-24", "video_views": 1371, "likes": 4, "shares": 5, "comments": 0}, {"date": "2026-03-25", "video_views": 1560, "likes": 11, "shares": 0, "comments": 0}, {"date": "2026-03-26", "video_views": 1152, "likes": 9, "shares": 7, "comments": 0}, {"date": "2026-03-27", "video_views": 1372, "likes": 5, "shares": 6, "comments": 0}, {"date": "2026-03-28", "video_views": 1629, "likes": 9, "shares": 10, "comments": 0}, {"date": "2026-03-29", "video_views": 1780, "likes": 12, "shares": 6, "comments": 0}, {"date": "2026-03-30", "video_views": 1465, "likes": 5, "shares": 3, "comments": 1}, {"date": "2026-03-31", "video_views": 1176, "likes": 6, "shares": 10, "comments": 0}, {"date": "2026-04-01", "video_views": 1191, "likes": 9, "shares": 7, "comments": 0}, {"date": "2026-04-02", "video_views": 1708, "likes": 7, "shares": 4, "comments": 0}, {"date": "2026-04-03", "video_views": 1722, "likes": 8, "shares": 5, "comments": 1}, {"date": "2026-04-04", "video_views": 1911, "likes": 9, "shares": 5, "comments": 0}, {"date": "2026-04-05", "video_views": 1540, "likes": 11, "shares": 4, "comments": 0}];
const VIBE_DATA = [{"date": "2026-03-23", "campaign": "Retargeting Hangsmart", "spend": 101.28, "impressions": 4788, "cpm": 21.15}, {"date": "2026-03-23", "campaign": "TOF- HangSmart Traffic Campaign", "spend": 249.02, "impressions": 18586, "cpm": 13.4}, {"date": "2026-03-24", "campaign": "Retargeting Hangsmart", "spend": 99.99, "impressions": 4840, "cpm": 20.66}, {"date": "2026-03-24", "campaign": "TOF- HangSmart Traffic Campaign", "spend": 255.08, "impressions": 13348, "cpm": 19.11}, {"date": "2026-03-25", "campaign": "Retargeting Hangsmart", "spend": 99.75, "impressions": 4873, "cpm": 20.47}, {"date": "2026-03-25", "campaign": "TOF- HangSmart Traffic Campaign", "spend": 247.78, "impressions": 16135, "cpm": 15.36}, {"date": "2026-03-26", "campaign": "Retargeting Hangsmart", "spend": 99.58, "impressions": 4824, "cpm": 20.64}, {"date": "2026-03-26", "campaign": "TOF- HangSmart Traffic Campaign", "spend": 253.83, "impressions": 18342, "cpm": 13.84}, {"date": "2026-03-27", "campaign": "Retargeting Hangsmart", "spend": 100.08, "impressions": 4940, "cpm": 20.26}, {"date": "2026-03-27", "campaign": "TOF- HangSmart Traffic Campaign", "spend": 245.4, "impressions": 16121, "cpm": 15.22}, {"date": "2026-03-28", "campaign": "Retargeting Hangsmart", "spend": 99.85, "impressions": 4871, "cpm": 20.5}, {"date": "2026-03-28", "campaign": "TOF- HangSmart Traffic Campaign", "spend": 250.23, "impressions": 17352, "cpm": 14.42}, {"date": "2026-03-29", "campaign": "Retargeting Hangsmart", "spend": 100.1, "impressions": 4887, "cpm": 20.48}, {"date": "2026-03-29", "campaign": "TOF- HangSmart Traffic Campaign", "spend": 251.14, "impressions": 18507, "cpm": 13.57}, {"date": "2026-03-30", "campaign": "Retargeting Hangsmart", "spend": 100.89, "impressions": 4813, "cpm": 20.96}, {"date": "2026-03-30", "campaign": "TOF- HangSmart Traffic Campaign", "spend": 248.98, "impressions": 16456, "cpm": 15.13}, {"date": "2026-03-31", "campaign": "Retargeting Hangsmart", "spend": 113.39, "impressions": 5504, "cpm": 20.6}, {"date": "2026-03-31", "campaign": "TOF- HangSmart Traffic Campaign", "spend": 262.78, "impressions": 15811, "cpm": 16.62}, {"date": "2026-04-01", "campaign": "Retargeting Hangsmart", "spend": 89.95, "impressions": 3797, "cpm": 23.69}, {"date": "2026-04-01", "campaign": "TOF- HangSmart Traffic Campaign", "spend": 254.21, "impressions": 13784, "cpm": 18.44}, {"date": "2026-04-02", "campaign": "Retargeting Hangsmart", "spend": 99.98, "impressions": 4640, "cpm": 21.55}, {"date": "2026-04-02", "campaign": "TOF- HangSmart Traffic Campaign", "spend": 245.84, "impressions": 15844, "cpm": 15.52}, {"date": "2026-04-03", "campaign": "Retargeting Hangsmart", "spend": 105.85, "impressions": 4749, "cpm": 22.29}, {"date": "2026-04-03", "campaign": "TOF- HangSmart Traffic Campaign", "spend": 261.22, "impressions": 19015, "cpm": 13.74}, {"date": "2026-04-04", "campaign": "Retargeting Hangsmart", "spend": 95.73, "impressions": 4659, "cpm": 20.55}, {"date": "2026-04-04", "campaign": "TOF- HangSmart Traffic Campaign", "spend": 230.84, "impressions": 19581, "cpm": 11.79}, {"date": "2026-04-05", "campaign": "Retargeting Hangsmart", "spend": 98.96, "impressions": 4840, "cpm": 20.45}, {"date": "2026-04-05", "campaign": "TOF- HangSmart Traffic Campaign", "spend": 249.21, "impressions": 21816, "cpm": 11.42}];
const AMAZON_DATA = [{"date": "2026-01-01", "sessions": 1328, "units": 207, "sales": 10346.25, "orders": 182}, {"date": "2026-01-02", "sessions": 1328, "units": 207, "sales": 10346.25, "orders": 182}, {"date": "2026-01-03", "sessions": 1328, "units": 207, "sales": 10346.25, "orders": 182}, {"date": "2026-01-04", "sessions": 1328, "units": 207, "sales": 10346.25, "orders": 182}, {"date": "2026-01-05", "sessions": 1069, "units": 180, "sales": 9005.37, "orders": 158}, {"date": "2026-01-06", "sessions": 1069, "units": 180, "sales": 9005.37, "orders": 158}, {"date": "2026-01-07", "sessions": 1069, "units": 180, "sales": 9005.37, "orders": 158}, {"date": "2026-01-08", "sessions": 1069, "units": 180, "sales": 9005.37, "orders": 158}, {"date": "2026-01-09", "sessions": 1069, "units": 180, "sales": 9005.37, "orders": 158}, {"date": "2026-01-10", "sessions": 1069, "units": 180, "sales": 9005.37, "orders": 158}, {"date": "2026-01-11", "sessions": 1069, "units": 180, "sales": 9005.37, "orders": 158}, {"date": "2026-01-12", "sessions": 1231, "units": 193, "sales": 9674.77, "orders": 167}, {"date": "2026-01-13", "sessions": 1231, "units": 193, "sales": 9674.77, "orders": 167}, {"date": "2026-01-14", "sessions": 1231, "units": 193, "sales": 9674.77, "orders": 167}, {"date": "2026-01-15", "sessions": 1231, "units": 193, "sales": 9674.77, "orders": 167}, {"date": "2026-01-16", "sessions": 1231, "units": 193, "sales": 9674.77, "orders": 167}, {"date": "2026-01-17", "sessions": 1231, "units": 193, "sales": 9674.77, "orders": 167}, {"date": "2026-01-18", "sessions": 1231, "units": 193, "sales": 9674.77, "orders": 167}, {"date": "2026-01-19", "sessions": 1074, "units": 176, "sales": 9034.76, "orders": 154}, {"date": "2026-01-20", "sessions": 1074, "units": 176, "sales": 9034.76, "orders": 154}, {"date": "2026-01-21", "sessions": 1074, "units": 176, "sales": 9034.76, "orders": 154}, {"date": "2026-01-22", "sessions": 1074, "units": 176, "sales": 9034.76, "orders": 154}, {"date": "2026-01-23", "sessions": 1074, "units": 176, "sales": 9034.76, "orders": 154}, {"date": "2026-01-24", "sessions": 1074, "units": 176, "sales": 9034.76, "orders": 154}, {"date": "2026-01-25", "sessions": 1074, "units": 176, "sales": 9034.76, "orders": 154}, {"date": "2026-01-26", "sessions": 1215, "units": 187, "sales": 9776.18, "orders": 169}, {"date": "2026-01-27", "sessions": 1215, "units": 187, "sales": 9776.18, "orders": 169}, {"date": "2026-01-28", "sessions": 1215, "units": 187, "sales": 9776.18, "orders": 169}, {"date": "2026-01-29", "sessions": 1215, "units": 187, "sales": 9776.18, "orders": 169}, {"date": "2026-01-30", "sessions": 1215, "units": 187, "sales": 9776.18, "orders": 169}, {"date": "2026-01-31", "sessions": 1215, "units": 187, "sales": 9776.18, "orders": 169}, {"date": "2026-02-01", "sessions": 1297, "units": 205, "sales": 10363.34, "orders": 180}, {"date": "2026-02-02", "sessions": 1297, "units": 205, "sales": 10363.34, "orders": 180}, {"date": "2026-02-03", "sessions": 1297, "units": 205, "sales": 10363.34, "orders": 180}, {"date": "2026-02-04", "sessions": 1297, "units": 205, "sales": 10363.34, "orders": 180}, {"date": "2026-02-05", "sessions": 1297, "units": 205, "sales": 10363.34, "orders": 180}, {"date": "2026-02-06", "sessions": 1297, "units": 205, "sales": 10363.34, "orders": 180}, {"date": "2026-02-07", "sessions": 1297, "units": 205, "sales": 10363.34, "orders": 180}, {"date": "2026-02-08", "sessions": 1297, "units": 205, "sales": 10363.34, "orders": 180}, {"date": "2026-02-09", "sessions": 1154, "units": 189, "sales": 9804.84, "orders": 169}, {"date": "2026-02-10", "sessions": 1154, "units": 189, "sales": 9804.84, "orders": 169}, {"date": "2026-02-11", "sessions": 1154, "units": 189, "sales": 9804.84, "orders": 169}, {"date": "2026-02-12", "sessions": 1154, "units": 189, "sales": 9804.84, "orders": 169}, {"date": "2026-02-13", "sessions": 1154, "units": 189, "sales": 9804.84, "orders": 169}, {"date": "2026-02-14", "sessions": 1154, "units": 189, "sales": 9804.84, "orders": 169}, {"date": "2026-02-15", "sessions": 1154, "units": 189, "sales": 9804.84, "orders": 169}, {"date": "2026-02-16", "sessions": 1110, "units": 184, "sales": 9803.81, "orders": 160}, {"date": "2026-02-17", "sessions": 1110, "units": 184, "sales": 9803.81, "orders": 160}, {"date": "2026-02-18", "sessions": 1110, "units": 184, "sales": 9803.81, "orders": 160}, {"date": "2026-02-19", "sessions": 1110, "units": 184, "sales": 9803.81, "orders": 160}, {"date": "2026-02-20", "sessions": 1110, "units": 184, "sales": 9803.81, "orders": 160}, {"date": "2026-02-21", "sessions": 1110, "units": 184, "sales": 9803.81, "orders": 160}, {"date": "2026-02-22", "sessions": 1110, "units": 184, "sales": 9803.81, "orders": 160}, {"date": "2026-02-23", "sessions": 1132, "units": 212, "sales": 11275.48, "orders": 183}, {"date": "2026-02-24", "sessions": 1132, "units": 212, "sales": 11275.48, "orders": 183}, {"date": "2026-02-25", "sessions": 1132, "units": 212, "sales": 11275.48, "orders": 183}, {"date": "2026-02-26", "sessions": 1132, "units": 212, "sales": 11275.48, "orders": 183}, {"date": "2026-02-27", "sessions": 1132, "units": 212, "sales": 11275.48, "orders": 183}, {"date": "2026-02-28", "sessions": 1132, "units": 212, "sales": 11275.48, "orders": 183}, {"date": "2026-03-01", "sessions": 1122, "units": 224, "sales": 11637.67, "orders": 195}, {"date": "2026-03-02", "sessions": 1122, "units": 224, "sales": 11637.67, "orders": 195}, {"date": "2026-03-03", "sessions": 1122, "units": 224, "sales": 11637.67, "orders": 195}, {"date": "2026-03-04", "sessions": 1122, "units": 224, "sales": 11637.67, "orders": 195}, {"date": "2026-03-05", "sessions": 1122, "units": 224, "sales": 11637.67, "orders": 195}, {"date": "2026-03-06", "sessions": 1122, "units": 224, "sales": 11637.67, "orders": 195}, {"date": "2026-03-07", "sessions": 1122, "units": 224, "sales": 11637.67, "orders": 195}, {"date": "2026-03-08", "sessions": 1122, "units": 224, "sales": 11637.67, "orders": 195}, {"date": "2026-03-09", "sessions": 976, "units": 211, "sales": 11061.41, "orders": 182}, {"date": "2026-03-10", "sessions": 976, "units": 211, "sales": 11061.41, "orders": 182}, {"date": "2026-03-11", "sessions": 976, "units": 211, "sales": 11061.41, "orders": 182}, {"date": "2026-03-12", "sessions": 976, "units": 211, "sales": 11061.41, "orders": 182}, {"date": "2026-03-13", "sessions": 976, "units": 211, "sales": 11061.41, "orders": 182}, {"date": "2026-03-14", "sessions": 976, "units": 211, "sales": 11061.41, "orders": 182}, {"date": "2026-03-15", "sessions": 976, "units": 211, "sales": 11061.41, "orders": 182}, {"date": "2026-03-16", "sessions": 1098, "units": 196, "sales": 10131.25, "orders": 176}, {"date": "2026-03-17", "sessions": 1098, "units": 196, "sales": 10131.25, "orders": 176}, {"date": "2026-03-18", "sessions": 1098, "units": 196, "sales": 10131.25, "orders": 176}, {"date": "2026-03-19", "sessions": 1098, "units": 196, "sales": 10131.25, "orders": 176}, {"date": "2026-03-20", "sessions": 1098, "units": 196, "sales": 10131.25, "orders": 176}, {"date": "2026-03-21", "sessions": 1098, "units": 196, "sales": 10131.25, "orders": 176}, {"date": "2026-03-22", "sessions": 1018, "units": 194, "sales": 9990.03, "orders": 171}, {"date": "2026-03-23", "sessions": 938, "units": 192, "sales": 9848.82, "orders": 166}, {"date": "2026-03-24", "sessions": 938, "units": 192, "sales": 9848.82, "orders": 166}, {"date": "2026-03-25", "sessions": 938, "units": 192, "sales": 9848.82, "orders": 166}, {"date": "2026-03-26", "sessions": 938, "units": 192, "sales": 9848.82, "orders": 166}, {"date": "2026-03-27", "sessions": 938, "units": 192, "sales": 9848.82, "orders": 166}, {"date": "2026-03-28", "sessions": 938, "units": 192, "sales": 9848.82, "orders": 166}, {"date": "2026-03-29", "sessions": 938, "units": 192, "sales": 9848.82, "orders": 166}, {"date": "2026-03-30", "sessions": 1018, "units": 210, "sales": 10950.16, "orders": 178}, {"date": "2026-03-31", "sessions": 1018, "units": 210, "sales": 10950.16, "orders": 178}, {"date": "2026-04-01", "sessions": 1082, "units": 215, "sales": 10907.45, "orders": 189}, {"date": "2026-04-02", "sessions": 1082, "units": 215, "sales": 10907.45, "orders": 189}, {"date": "2026-04-03", "sessions": 1082, "units": 215, "sales": 10907.45, "orders": 189}, {"date": "2026-04-04", "sessions": 1082, "units": 215, "sales": 10907.45, "orders": 189}, {"date": "2026-04-05", "sessions": 1082, "units": 215, "sales": 10907.45, "orders": 189}];
const WALMART_DATA = [{"date": "2026-02-06", "tv_units": 80, "soundbar_units": 1, "total_units": 80, "retail": 4511.9}, {"date": "2026-02-07", "tv_units": 80, "soundbar_units": 1, "total_units": 80, "retail": 4511.9}, {"date": "2026-02-08", "tv_units": 80, "soundbar_units": 1, "total_units": 80, "retail": 4511.9}, {"date": "2026-02-09", "tv_units": 80, "soundbar_units": 1, "total_units": 80, "retail": 4511.9}, {"date": "2026-02-10", "tv_units": 80, "soundbar_units": 1, "total_units": 80, "retail": 4511.9}, {"date": "2026-02-11", "tv_units": 80, "soundbar_units": 1, "total_units": 80, "retail": 4511.9}, {"date": "2026-02-12", "tv_units": 80, "soundbar_units": 1, "total_units": 80, "retail": 4511.9}, {"date": "2026-02-13", "tv_units": 72, "soundbar_units": 0, "total_units": 72, "retail": 4057.84}, {"date": "2026-02-14", "tv_units": 72, "soundbar_units": 0, "total_units": 72, "retail": 4057.84}, {"date": "2026-02-15", "tv_units": 72, "soundbar_units": 0, "total_units": 72, "retail": 4057.84}, {"date": "2026-02-16", "tv_units": 72, "soundbar_units": 0, "total_units": 72, "retail": 4057.84}, {"date": "2026-02-17", "tv_units": 72, "soundbar_units": 0, "total_units": 72, "retail": 4057.84}, {"date": "2026-02-18", "tv_units": 72, "soundbar_units": 0, "total_units": 72, "retail": 4057.84}, {"date": "2026-02-19", "tv_units": 72, "soundbar_units": 0, "total_units": 72, "retail": 4057.84}, {"date": "2026-02-20", "tv_units": 86, "soundbar_units": 1, "total_units": 87, "retail": 4796.45}, {"date": "2026-02-21", "tv_units": 86, "soundbar_units": 1, "total_units": 87, "retail": 4796.45}, {"date": "2026-02-22", "tv_units": 86, "soundbar_units": 1, "total_units": 87, "retail": 4796.45}, {"date": "2026-02-23", "tv_units": 86, "soundbar_units": 1, "total_units": 87, "retail": 4796.45}, {"date": "2026-02-24", "tv_units": 86, "soundbar_units": 1, "total_units": 87, "retail": 4796.45}, {"date": "2026-02-25", "tv_units": 86, "soundbar_units": 1, "total_units": 87, "retail": 4796.45}, {"date": "2026-02-26", "tv_units": 86, "soundbar_units": 1, "total_units": 87, "retail": 4796.45}, {"date": "2026-02-27", "tv_units": 114, "soundbar_units": 0, "total_units": 114, "retail": 6413.16}, {"date": "2026-02-28", "tv_units": 114, "soundbar_units": 0, "total_units": 114, "retail": 6413.16}, {"date": "2026-03-01", "tv_units": 114, "soundbar_units": 0, "total_units": 114, "retail": 6413.16}, {"date": "2026-03-02", "tv_units": 114, "soundbar_units": 0, "total_units": 114, "retail": 6413.16}, {"date": "2026-03-03", "tv_units": 114, "soundbar_units": 0, "total_units": 114, "retail": 6413.16}, {"date": "2026-03-04", "tv_units": 114, "soundbar_units": 0, "total_units": 114, "retail": 6413.16}, {"date": "2026-03-05", "tv_units": 114, "soundbar_units": 0, "total_units": 114, "retail": 6413.16}, {"date": "2026-03-06", "tv_units": 117, "soundbar_units": 0, "total_units": 117, "retail": 6566.14}, {"date": "2026-03-07", "tv_units": 117, "soundbar_units": 0, "total_units": 117, "retail": 6566.14}, {"date": "2026-03-08", "tv_units": 117, "soundbar_units": 0, "total_units": 117, "retail": 6566.14}, {"date": "2026-03-09", "tv_units": 117, "soundbar_units": 0, "total_units": 117, "retail": 6566.14}, {"date": "2026-03-10", "tv_units": 117, "soundbar_units": 0, "total_units": 117, "retail": 6566.14}, {"date": "2026-03-11", "tv_units": 117, "soundbar_units": 0, "total_units": 117, "retail": 6566.14}, {"date": "2026-03-12", "tv_units": 117, "soundbar_units": 0, "total_units": 117, "retail": 6566.14}, {"date": "2026-03-13", "tv_units": 95, "soundbar_units": 0, "total_units": 95, "retail": 5268.29}, {"date": "2026-03-14", "tv_units": 95, "soundbar_units": 0, "total_units": 95, "retail": 5268.29}, {"date": "2026-03-15", "tv_units": 95, "soundbar_units": 0, "total_units": 95, "retail": 5268.29}, {"date": "2026-03-16", "tv_units": 95, "soundbar_units": 0, "total_units": 95, "retail": 5268.29}, {"date": "2026-03-17", "tv_units": 95, "soundbar_units": 0, "total_units": 95, "retail": 5268.29}, {"date": "2026-03-18", "tv_units": 95, "soundbar_units": 0, "total_units": 95, "retail": 5268.29}, {"date": "2026-03-19", "tv_units": 95, "soundbar_units": 0, "total_units": 95, "retail": 5268.29}, {"date": "2026-03-20", "tv_units": 83, "soundbar_units": 0, "total_units": 83, "retail": 4629.74}, {"date": "2026-03-21", "tv_units": 83, "soundbar_units": 0, "total_units": 83, "retail": 4629.74}, {"date": "2026-03-22", "tv_units": 83, "soundbar_units": 0, "total_units": 83, "retail": 4629.74}, {"date": "2026-03-23", "tv_units": 83, "soundbar_units": 0, "total_units": 83, "retail": 4629.74}, {"date": "2026-03-24", "tv_units": 83, "soundbar_units": 0, "total_units": 83, "retail": 4629.74}, {"date": "2026-03-25", "tv_units": 83, "soundbar_units": 0, "total_units": 83, "retail": 4629.74}, {"date": "2026-03-26", "tv_units": 83, "soundbar_units": 0, "total_units": 83, "retail": 4629.74}, {"date": "2026-03-27", "tv_units": 81, "soundbar_units": 0, "total_units": 81, "retail": 4536.43}, {"date": "2026-03-28", "tv_units": 81, "soundbar_units": 0, "total_units": 81, "retail": 4536.43}, {"date": "2026-03-29", "tv_units": 81, "soundbar_units": 0, "total_units": 81, "retail": 4536.43}, {"date": "2026-03-30", "tv_units": 81, "soundbar_units": 0, "total_units": 81, "retail": 4536.43}, {"date": "2026-03-31", "tv_units": 81, "soundbar_units": 0, "total_units": 81, "retail": 4536.43}, {"date": "2026-04-01", "tv_units": 81, "soundbar_units": 0, "total_units": 81, "retail": 4536.43}, {"date": "2026-04-02", "tv_units": 81, "soundbar_units": 0, "total_units": 81, "retail": 4536.43}, {"date": "2026-04-03", "tv_units": 85, "soundbar_units": 0, "total_units": 85, "retail": 4815.32}, {"date": "2026-04-04", "tv_units": 85, "soundbar_units": 0, "total_units": 85, "retail": 4815.32}, {"date": "2026-04-05", "tv_units": 85, "soundbar_units": 0, "total_units": 85, "retail": 4815.32}, {"date": "2026-04-06", "tv_units": 85, "soundbar_units": 0, "total_units": 85, "retail": 4815.32}, {"date": "2026-04-07", "tv_units": 85, "soundbar_units": 0, "total_units": 85, "retail": 4815.32}, {"date": "2026-04-08", "tv_units": 85, "soundbar_units": 0, "total_units": 85, "retail": 4815.32}, {"date": "2026-04-09", "tv_units": 85, "soundbar_units": 0, "total_units": 85, "retail": 4815.32}];

let dFrom = '2026-03-30';
let dTo = '2026-04-05';



function fmt(v) { return '$' + (typeof v === 'number' ? v.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2}) : v); }
function fmtN(v) { return Math.round(v).toLocaleString(); }
function fmtP(v) { return (v * 100).toFixed(2) + '%'; }
function filterByDate(data, from, to) { return data.filter(function(r) { return r.date >= from && r.date <= to; }); }
function tryStorage(fn) { try { return fn(); } catch(e) { return null; } }
function getDayName(dateStr) {
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  return days[new Date(dateStr + 'T12:00:00').getDay()];
}
function getDayShort(dateStr) {
  var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  return days[new Date(dateStr + 'T12:00:00').getDay()];
}
function fmtDate(d) {
  var parts = d.split('-');
  return parts[1] + '/' + parts[2];
}

function getAmazon(date) {
  var r = AMAZON_DATA.find(function(x) { return x.date === date; });
  return r || {date: date, sessions: 0, units: 0, sales: 0, orders: 0};
}
function getWalmart(date) {
  var r = WALMART_DATA.find(function(x) { return x.date === date; });
  return r || {date: date, tv_units: 0, soundbar_units: 0, total_units: 0, retail: 0};
}

function getAllDates(from, to) {
  var dateSet = {};
  var allData = [GA4_DATA, META_DAILY_DATA, SHOPIFY_DATA, TIKTOK_DATA, VIBE_DATA, AMAZON_DATA, WALMART_DATA];
  allData.forEach(function(arr) {
    arr.forEach(function(r) {
      if (r.date >= from && r.date <= to) dateSet[r.date] = true;
    });
  });
  GOOGLE_ADS_DATA.forEach(function(r) {
    if (r.date >= from && r.date <= to) dateSet[r.date] = true;
  });
  return Object.keys(dateSet).sort();
}



function checkPassword() {
  var pw = document.getElementById('pwInput').value;
  if (pw === atob('SGFuZ3NtYXJ0MSE=')) {
    tryStorage(function() { localStorage.setItem('hs_auth', 'true'); });
    document.getElementById('loginOverlay').classList.add('hidden');
    document.getElementById('dashboardWrap').style.display = 'block';
    renderAll();
  } else {
    document.getElementById('pwError').style.display = 'block';
  }
}



function switchTab(tabName) {
  document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
  document.querySelectorAll('.nav-btn').forEach(function(b) { b.classList.remove('active'); });
  document.getElementById(tabName).classList.add('active');
  document.querySelector('[data-tab="' + tabName + '"]').classList.add('active');
}

function applyDateFilter() {
  dFrom = document.getElementById('dFrom').value;
  dTo = document.getElementById('dTo').value;
  renderAll();
}



function renderOverview() {
  var dates = getAllDates(dFrom, dTo);
  var numDays = dates.length;

  var totalAdSpend = 0, totalShopifyOrders = 0, totalAmazonOrders = 0, totalWalmartUnits = 0;
  var totalAmazonSales = 0, totalWalmartSales = 0, totalShopifySales = 0;
  var totalGA4Sessions = 0, totalGA4Transactions = 0;

  dates.forEach(function(d) {
    var meta = META_DAILY_DATA.find(function(x){return x.date===d;});
    var gAds = GOOGLE_ADS_DATA.filter(function(x){return x.date===d;});
    var vibe = VIBE_DATA.filter(function(x){return x.date===d;});
    var shop = SHOPIFY_DATA.find(function(x){return x.date===d;});
    var ga = GA4_DATA.find(function(x){return x.date===d;});
    var amz = getAmazon(d);
    var wmt = getWalmart(d);

    if(meta) totalAdSpend += meta.spend;
    gAds.forEach(function(g){totalAdSpend += g.spend;});
    vibe.forEach(function(v){totalAdSpend += v.spend;});
    if(shop) { totalShopifyOrders += shop.orders; totalShopifySales += shop.orders * 54.99; }
    totalAmazonOrders += amz.orders;
    totalAmazonSales += amz.sales;
    totalWalmartUnits += wmt.total_units;
    totalWalmartSales += wmt.retail;
    if(ga) { totalGA4Sessions += ga.sessions; totalGA4Transactions += ga.transactions; }
  });

  var totalEstUnits = totalShopifyOrders + totalAmazonOrders + totalWalmartUnits;
  var totalRevenue = totalShopifySales + totalAmazonSales + totalWalmartSales;
  var blendedROAS = totalAdSpend > 0 ? (totalRevenue / totalAdSpend).toFixed(2) : 'N/A';
  var avgOrderValue = totalEstUnits > 0 ? (totalRevenue / totalEstUnits).toFixed(2) : 'N/A';
  var cvr = totalGA4Sessions > 0 ? ((totalGA4Transactions / totalGA4Sessions) * 100).toFixed(2) + '%' : 'N/A';
  var costPerTx = totalEstUnits > 0 ? (totalAdSpend / totalEstUnits).toFixed(2) : 'N/A';

  var html = '';
  html += '<div class="card"><h3>Total Ad Spend</h3><div class="value">' + fmt(totalAdSpend) + '</div></div>';
  html += '<div class="card"><h3>Blended ROAS</h3><div class="value" style="color:var(--gold)">' + blendedROAS + 'x</div></div>';
  html += '<div class="card"><h3>Average Order Value</h3><div class="value">' + fmt(parseFloat(avgOrderValue)) + '</div></div>';
  html += '<div class="card"><h3>Shopify Orders</h3><div class="value">' + fmtN(totalShopifyOrders) + '</div></div>';
  html += '<div class="card"><h3>Amazon Orders</h3><div class="value">' + fmtN(totalAmazonOrders) + '</div></div>';
  html += '<div class="card"><h3>Walmart Units</h3><div class="value">' + fmtN(totalWalmartUnits) + '</div></div>';
  html += '<div class="card"><h3>Total Est. Units</h3><div class="value">' + fmtN(totalEstUnits) + '</div></div>';
  html += '<div class="card"><h3>GA4 Sessions</h3><div class="value">' + fmtN(totalGA4Sessions) + '</div></div>';
  html += '<div class="card"><h3>Conversion Rate</h3><div class="value">' + cvr + '</div></div>';
  html += '<div class="card"><h3>Cost Per Unit</h3><div class="value">' + fmt(parseFloat(costPerTx)) + '</div></div>';
  document.getElementById('overviewCards').innerHTML = html;

  var summaryHtml = '<strong>Summary Analysis (' + fmtDate(dFrom) + ' - ' + fmtDate(dTo) + '):</strong> ';
  summaryHtml += 'Over this ' + numDays + '-day period, HangSmart generated an estimated <strong>' + fmtN(totalEstUnits) + ' total units</strong> across all sales channels with <strong>' + fmt(totalRevenue) + ' in estimated total revenue</strong>. ';
  summaryHtml += 'Total ad spend was <strong>' + fmt(totalAdSpend) + '</strong> yielding a blended ROAS of <strong>' + blendedROAS + 'x</strong>. ';
  if(totalShopifyOrders > 0) summaryHtml += 'Shopify accounted for <strong>' + fmtN(totalShopifyOrders) + ' orders</strong> (' + ((totalShopifyOrders/totalEstUnits)*100).toFixed(1) + '% of total units). ';
  if(totalAmazonOrders > 0) summaryHtml += 'Amazon drove <strong>' + fmtN(totalAmazonOrders) + ' orders</strong> (' + ((totalAmazonOrders/totalEstUnits)*100).toFixed(1) + '%). ';
  if(totalWalmartUnits > 0) summaryHtml += 'Walmart contributed <strong>' + fmtN(totalWalmartUnits) + ' units</strong> (' + ((totalWalmartUnits/totalEstUnits)*100).toFixed(1) + '%). ';
  if(totalGA4Sessions > 0) summaryHtml += 'The website averaged <strong>' + fmtN(Math.round(totalGA4Sessions/numDays)) + ' sessions/day</strong> with a <strong>' + cvr + ' conversion rate</strong>.';
  document.getElementById('summaryAnalysis').innerHTML = summaryHtml;

  renderDOWTable(dates);

  renderDailyBlended(dates);

  renderTopBottomDays(dates);

  renderOverviewCampaigns();
}

function renderDOWTable(dates) {
  var dow = {};
  ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].forEach(function(d){
    dow[d] = {txTotal:0,txShopify:0,txAmazon:0,txWalmart:0,sessions:0,count:0};
  });
  dates.forEach(function(d) {
    var day = getDayName(d);
    var shop = SHOPIFY_DATA.find(function(x){return x.date===d;});
    var ga = GA4_DATA.find(function(x){return x.date===d;});
    var amz = getAmazon(d);
    var wmt = getWalmart(d);
    var shopOrders = shop ? shop.orders : 0;
    dow[day].txShopify += shopOrders;
    dow[day].txAmazon += amz.orders;
    dow[day].txWalmart += wmt.total_units;
    dow[day].txTotal += shopOrders + amz.orders + wmt.total_units;
    dow[day].sessions += ga ? ga.sessions : 0;
    dow[day].count += 1;
  });

  var html = '<table class="perf-table"><thead><tr><th style="text-align:left">Day</th><th>Avg Total Transactions</th><th>Avg Shopify</th><th>Avg Amazon</th><th>Avg Walmart</th><th>Avg Sessions</th><th>Performance Tier</th></tr></thead><tbody>';
  var sorted = Object.keys(dow).sort(function(a,b){ return dow[b].txTotal/Math.max(dow[b].count,1) - dow[a].txTotal/Math.max(dow[a].count,1); });
  sorted.forEach(function(day) {
    var d = dow[day];
    if(d.count === 0) return;
    var avgTx = (d.txTotal / d.count).toFixed(1);
    var avgShop = (d.txShopify / d.count).toFixed(1);
    var avgAmz = (d.txAmazon / d.count).toFixed(1);
    var avgWmt = (d.txWalmart / d.count).toFixed(1);
    var avgSess = Math.round(d.sessions / d.count);
    var tier = avgTx >= 300 ? '<span class="tag tag-scale">Peak</span>' : avgTx >= 200 ? '<span class="tag tag-stable">Strong</span>' : avgTx >= 150 ? '<span class="tag tag-monitor">Average</span>' : '<span class="tag tag-underperform">Below Avg</span>';
    html += '<tr><td style="text-align:left;font-weight:600">' + day + '</td><td style="text-align:right;color:var(--gold);font-weight:700">' + avgTx + '</td><td style="text-align:right">' + avgShop + '</td><td style="text-align:right">' + avgAmz + '</td><td style="text-align:right">' + avgWmt + '</td><td style="text-align:right">' + fmtN(avgSess) + '</td><td style="text-align:right">' + tier + '</td></tr>';
  });
  html += '</tbody></table>';
  document.getElementById('dowTable').innerHTML = html;
}

function renderDailyBlended(dates) {
  var html = '<table><thead><tr><th>Date</th><th>Day</th><th style="text-align:right">Total Transactions</th><th style="text-align:right">Shopify</th><th style="text-align:right">Amazon</th><th style="text-align:right">Walmart</th><th style="text-align:right">Total Ad Spend</th><th style="text-align:right">Est. Revenue</th><th style="text-align:right">Sessions</th></tr></thead><tbody>';
  dates.forEach(function(d) {
    var shop = SHOPIFY_DATA.find(function(x){return x.date===d;});
    var ga = GA4_DATA.find(function(x){return x.date===d;});
    var amz = getAmazon(d);
    var wmt = getWalmart(d);
    var meta = META_DAILY_DATA.find(function(x){return x.date===d;});
    var gAds = GOOGLE_ADS_DATA.filter(function(x){return x.date===d;});
    var vibes = VIBE_DATA.filter(function(x){return x.date===d;});
    var shopO = shop ? shop.orders : 0;
    var amzO = amz.orders;
    var wmtU = wmt.total_units;
    var totalTx = shopO + amzO + wmtU;
    var adSpend = (meta ? meta.spend : 0) + gAds.reduce(function(s,g){return s+g.spend;},0) + vibes.reduce(function(s,v){return s+v.spend;},0);
    var rev = (shopO * 54.99) + amz.sales + wmt.retail;
    var sess = ga ? ga.sessions : 0;
    html += '<tr><td style="font-weight:600">' + fmtDate(d) + '</td><td>' + getDayShort(d) + '</td>';
    html += '<td style="text-align:right;color:var(--gold);font-weight:700">' + fmtN(totalTx) + '</td>';
    html += '<td style="text-align:right">' + fmtN(shopO) + '</td>';
    html += '<td style="text-align:right">' + fmtN(amzO) + '</td>';
    html += '<td style="text-align:right">' + fmtN(wmtU) + '</td>';
    html += '<td style="text-align:right">' + fmt(adSpend) + '</td>';
    html += '<td style="text-align:right;color:var(--green)">' + fmt(rev) + '</td>';
    html += '<td style="text-align:right">' + fmtN(sess) + '</td></tr>';
  });
  html += '</tbody></table>';
  document.getElementById('dailyTable').innerHTML = html;
}

function renderTopBottomDays(dates) {

  var dayData = [];
  dates.forEach(function(d) {
    var shop = SHOPIFY_DATA.find(function(x){return x.date===d;});
    var ga = GA4_DATA.find(function(x){return x.date===d;});
    var amz = getAmazon(d);
    var wmt = getWalmart(d);
    var meta = META_DAILY_DATA.find(function(x){return x.date===d;});
    var gAds = GOOGLE_ADS_DATA.filter(function(x){return x.date===d;});
    var vibes = VIBE_DATA.filter(function(x){return x.date===d;});
    var shopO = shop ? shop.orders : 0;
    var amzO = amz.orders;
    var wmtU = wmt.total_units;
    var totalTx = shopO + amzO + wmtU;
    var adSpend = (meta ? meta.spend : 0) + gAds.reduce(function(s,g){return s+g.spend;},0) + vibes.reduce(function(s,v){return s+v.spend;},0);
    var sess = ga ? ga.sessions : 0;
    var cvr = sess > 0 ? ((ga ? ga.transactions : 0) / sess * 100).toFixed(2) : '0.00';
    dayData.push({date:d, total:totalTx, shopify:shopO, amazon:amzO, walmart:wmtU, spend:adSpend, sessions:sess, cvr:cvr});
  });

  dayData.sort(function(a,b){return b.total - a.total;});

  function renderDayCards(arr, containerId) {
    var html = '';
    arr.forEach(function(dd, idx) {
      var dayName = getDayName(dd.date);
      var dateStr = new Date(dd.date + 'T12:00:00').toLocaleDateString('en-US', {month:'long',day:'numeric'});
      html += '<div class="card" style="border-left:3px solid ' + (containerId==='topDays'?'var(--green)':'var(--red)') + ';margin-bottom:12px">';
      html += '<h4 style="color:var(--gold);font-size:16px;margin-bottom:8px">' + (idx+1) + '. ' + dateStr + ' (' + dayName + ') - ' + dd.total + ' Total Transactions</h4>';
      html += '<div style="display:flex;gap:32px;flex-wrap:wrap;margin-bottom:8px">';
      html += '<div><span style="color:var(--muted);font-size:11px;text-transform:uppercase">Shopify</span><div style="font-weight:700">' + dd.shopify + '</div></div>';
      html += '<div><span style="color:var(--muted);font-size:11px;text-transform:uppercase">Amazon</span><div style="font-weight:700">' + dd.amazon + '</div></div>';
      html += '<div><span style="color:var(--muted);font-size:11px;text-transform:uppercase">Walmart</span><div style="font-weight:700">' + dd.walmart + '</div></div>';
      html += '<div><span style="color:var(--muted);font-size:11px;text-transform:uppercase">Sessions</span><div style="font-weight:700">' + fmtN(dd.sessions) + '</div></div>';
      html += '<div><span style="color:var(--muted);font-size:11px;text-transform:uppercase">CVR</span><div style="font-weight:700">' + dd.cvr + '%</div></div>';
      html += '<div><span style="color:var(--muted);font-size:11px;text-transform:uppercase">Ad Spend</span><div style="font-weight:700">' + fmt(dd.spend) + '</div></div>';
      html += '</div>';

      var drivers = [];
      if(dayName === 'Saturday' || dayName === 'Sunday') drivers.push('Weekend effect');
      if(dd.sessions > 1800) drivers.push('high session volume');
      if(parseFloat(dd.cvr) > 2.5) drivers.push('exceptional CVR at ' + dd.cvr + '%');
      if(dd.spend > 3500) drivers.push('elevated ad spend at ' + fmt(dd.spend));
      if(dd.amazon > 150) drivers.push('strong Amazon volume');
      if(drivers.length > 0) html += '<p style="color:var(--muted);font-size:13px;font-style:italic">Drivers: ' + drivers.join(', ') + '</p>';
      html += '</div>';
    });
    document.getElementById(containerId).innerHTML = html;
  }

  renderDayCards(dayData.slice(0, 5), 'topDays');
  renderDayCards(dayData.slice(-5).reverse(), 'bottomDays');
}



function renderOverviewCampaigns() {

  var metaF = filterByDate(META_DAILY_DATA, dFrom, dTo);
  var campTotals = {};
  META_CAMPAIGNS.forEach(function(c) {
    campTotals[c.campaign] = {spend:c.spend, impressions:c.impressions, clicks:c.clicks, ctr:c.ctr, cpc:c.cpc, cpm:c.cpm};
  });
  var html = '<table><thead><tr><th>Campaign</th><th style="text-align:right">Spend</th><th style="text-align:right">Impressions</th><th style="text-align:right">Clicks</th><th style="text-align:right">CTR</th><th style="text-align:right">CPC</th><th style="text-align:right">CPM</th><th>Status</th></tr></thead><tbody>';
  META_CAMPAIGNS.forEach(function(c) {
    var ctr = c.ctr;
    var status = ctr >= 0.03 ? '<span class="tag tag-scale">Healthy</span>' : ctr >= 0.025 ? '<span class="tag tag-stable">Stable</span>' : ctr >= 0.02 ? '<span class="tag tag-monitor">Monitor</span>' : '<span class="tag tag-underperform">Underperforming</span>';
    html += '<tr><td style="font-weight:600;max-width:300px">' + c.campaign + '</td>';
    html += '<td style="text-align:right">' + fmt(c.spend) + '</td>';
    html += '<td style="text-align:right">' + fmtN(c.impressions) + '</td>';
    html += '<td style="text-align:right">' + fmtN(c.clicks) + '</td>';
    html += '<td style="text-align:right;color:' + (ctr >= 0.025 ? 'var(--green)' : ctr >= 0.02 ? 'var(--gold)' : 'var(--red)') + '">' + (ctr*100).toFixed(2) + '%</td>';
    html += '<td style="text-align:right">' + fmt(c.cpc) + '</td>';
    html += '<td style="text-align:right">' + fmt(c.cpm) + '</td>';
    html += '<td>' + status + '</td></tr>';
  });
  html += '</tbody></table>';
  document.getElementById('overviewMetaTable').innerHTML = html;

  var gFiltered = GOOGLE_ADS_DATA.filter(function(x){return x.date >= dFrom && x.date <= dTo;});
  var gCamps = {};
  gFiltered.forEach(function(r) {
    if (\!gCamps[r.campaign]) gCamps[r.campaign] = {spend:0,impressions:0,clicks:0,conversions:0};
    gCamps[r.campaign].spend += r.spend;
    gCamps[r.campaign].impressions += r.impressions;
    gCamps[r.campaign].clicks += r.clicks;
    gCamps[r.campaign].conversions += r.conversions;
  });
  var gHtml = '<table><thead><tr><th>Campaign</th><th style="text-align:right">Spend</th><th style="text-align:right">Impressions</th><th style="text-align:right">Clicks</th><th style="text-align:right">CTR</th><th style="text-align:right">CPC</th><th style="text-align:right">Conversions</th><th style="text-align:right">CPA</th></tr></thead><tbody>';
  Object.keys(gCamps).forEach(function(name) {
    var c = gCamps[name];
    var ctr = c.impressions > 0 ? c.clicks / c.impressions : 0;
    var cpc = c.clicks > 0 ? c.spend / c.clicks : 0;
    var cpa = c.conversions > 0 ? c.spend / c.conversions : 0;
    gHtml += '<tr><td style="font-weight:600">' + name + '</td>';
    gHtml += '<td style="text-align:right">' + fmt(c.spend) + '</td>';
    gHtml += '<td style="text-align:right">' + fmtN(c.impressions) + '</td>';
    gHtml += '<td style="text-align:right">' + fmtN(c.clicks) + '</td>';
    gHtml += '<td style="text-align:right">' + (ctr*100).toFixed(2) + '%</td>';
    gHtml += '<td style="text-align:right">' + fmt(cpc) + '</td>';
    gHtml += '<td style="text-align:right">' + c.conversions.toFixed(1) + '</td>';
    gHtml += '<td style="text-align:right">' + (cpa > 0 ? fmt(cpa) : '-') + '</td></tr>';
  });
  gHtml += '</tbody></table>';
  document.getElementById('overviewGoogleTable').innerHTML = gHtml;

  var vFiltered = filterByDate(VIBE_DATA, dFrom, dTo);
  var vCamps = {};
  vFiltered.forEach(function(r) {
    if (\!vCamps[r.campaign]) vCamps[r.campaign] = {spend:0,impressions:0};
    vCamps[r.campaign].spend += r.spend;
    vCamps[r.campaign].impressions += r.impressions;
  });
  var vHtml = '<table><thead><tr><th>Campaign</th><th style="text-align:right">Spend</th><th style="text-align:right">Impressions</th><th style="text-align:right">CPM</th></tr></thead><tbody>';
  Object.keys(vCamps).forEach(function(name) {
    var c = vCamps[name];
    var cpm = c.impressions > 0 ? (c.spend / c.impressions * 1000).toFixed(2) : '0.00';
    vHtml += '<tr><td style="font-weight:600">' + name + '</td>';
    vHtml += '<td style="text-align:right">' + fmt(c.spend) + '</td>';
    vHtml += '<td style="text-align:right">' + fmtN(c.impressions) + '</td>';
    vHtml += '<td style="text-align:right">' + fmt(parseFloat(cpm)) + '</td></tr>';
  });
  vHtml += '</tbody></table>';
  document.getElementById('overviewVibeTable').innerHTML = vHtml;
}



function renderMeta() {
  var metaF = filterByDate(META_DAILY_DATA, dFrom, dTo);
  var totalSpend = metaF.reduce(function(s,r){return s+r.spend;},0);
  var totalImpressions = metaF.reduce(function(s,r){return s+r.impressions;},0);
  var totalClicks = metaF.reduce(function(s,r){return s+r.clicks;},0);
  var avgCTR = totalImpressions > 0 ? (totalClicks/totalImpressions*100).toFixed(2) : '0.00';
  var avgCPC = totalClicks > 0 ? (totalSpend/totalClicks).toFixed(2) : '0.00';
  var avgCPM = totalImpressions > 0 ? (totalSpend/totalImpressions*1000).toFixed(2) : '0.00';

  var html = '';
  html += '<div class="card"><h3>Total Spend</h3><div class="value">' + fmt(totalSpend) + '</div></div>';
  html += '<div class="card"><h3>Total Impressions</h3><div class="value">' + fmtN(totalImpressions) + '</div></div>';
  html += '<div class="card"><h3>Total Clicks</h3><div class="value">' + fmtN(totalClicks) + '</div></div>';
  html += '<div class="card"><h3>Avg CTR</h3><div class="value" style="color:' + (parseFloat(avgCTR) >= 2.5 ? 'var(--green)' : 'var(--gold)') + '">' + avgCTR + '%</div></div>';
  html += '<div class="card"><h3>Avg CPC</h3><div class="value">' + fmt(parseFloat(avgCPC)) + '</div></div>';
  html += '<div class="card"><h3>Avg CPM</h3><div class="value">' + fmt(parseFloat(avgCPM)) + '</div></div>';
  document.getElementById('metaCards').innerHTML = html;

  var campHtml = '<table><thead><tr><th>Campaign</th><th style="text-align:right">Spend</th><th style="text-align:right">Impressions</th><th style="text-align:right">Reach</th><th style="text-align:right">Clicks</th><th style="text-align:right">CTR</th><th style="text-align:right">CPC</th><th style="text-align:right">CPM</th><th>Status</th></tr></thead><tbody>';
  META_CAMPAIGNS.forEach(function(c) {
    var ctr = c.ctr;
    var status = ctr >= 0.03 ? '<span class="tag tag-scale">Scale</span>' : ctr >= 0.025 ? '<span class="tag tag-stable">Stable</span>' : ctr >= 0.02 ? '<span class="tag tag-monitor">Monitor</span>' : '<span class="tag tag-underperform">Underperform</span>';
    campHtml += '<tr><td style="font-weight:600;max-width:280px">' + c.campaign + '</td>';
    campHtml += '<td style="text-align:right">' + fmt(c.spend) + '</td>';
    campHtml += '<td style="text-align:right">' + fmtN(c.impressions) + '</td>';
    campHtml += '<td style="text-align:right">-</td>';
    campHtml += '<td style="text-align:right">' + fmtN(c.clicks) + '</td>';
    campHtml += '<td style="text-align:right;color:' + (ctr >= 0.025 ? 'var(--green)' : ctr >= 0.02 ? 'var(--gold)' : 'var(--red)') + '">' + (ctr*100).toFixed(2) + '%</td>';
    campHtml += '<td style="text-align:right">' + fmt(c.cpc) + '</td>';
    campHtml += '<td style="text-align:right">' + fmt(c.cpm) + '</td>';
    campHtml += '<td>' + status + '</td></tr>';
  });
  campHtml += '</tbody></table>';
  document.getElementById('metaCampaignTable').innerHTML = campHtml;

  var dHtml = '<table><thead><tr><th>Date</th><th>Day</th><th style="text-align:right">Spend</th><th style="text-align:right">Impressions</th><th style="text-align:right">Clicks</th><th style="text-align:right">CTR</th><th style="text-align:right">CPC</th><th style="text-align:right">CPM</th></tr></thead><tbody>';
  metaF.forEach(function(r) {
    dHtml += '<tr><td style="font-weight:600">' + fmtDate(r.date) + '</td><td>' + getDayShort(r.date) + '</td>';
    dHtml += '<td style="text-align:right">' + fmt(r.spend) + '</td>';
    dHtml += '<td style="text-align:right">' + fmtN(r.impressions) + '</td>';
    dHtml += '<td style="text-align:right">' + fmtN(r.clicks) + '</td>';
    dHtml += '<td style="text-align:right;color:' + (r.ctr >= 0.025 ? 'var(--green)' : 'var(--gold)') + '">' + (r.ctr*100).toFixed(2) + '%</td>';
    dHtml += '<td style="text-align:right">' + fmt(r.cpc) + '</td>';
    dHtml += '<td style="text-align:right">' + fmt(r.cpm) + '</td></tr>';
  });
  dHtml += '</tbody></table>';
  document.getElementById('metaDailyTable').innerHTML = dHtml;
}



function renderGoogle() {
  var gFiltered = GOOGLE_ADS_DATA.filter(function(x){return x.date >= dFrom && x.date <= dTo;});
  var totalSpend = gFiltered.reduce(function(s,r){return s+r.spend;},0);
  var totalImpressions = gFiltered.reduce(function(s,r){return s+r.impressions;},0);
  var totalClicks = gFiltered.reduce(function(s,r){return s+r.clicks;},0);
  var totalConversions = gFiltered.reduce(function(s,r){return s+r.conversions;},0);
  var avgCTR = totalImpressions > 0 ? (totalClicks/totalImpressions*100).toFixed(2) : '0.00';
  var avgCPC = totalClicks > 0 ? (totalSpend/totalClicks).toFixed(2) : '0.00';
  var cpa = totalConversions > 0 ? (totalSpend/totalConversions).toFixed(2) : 'N/A';

  var html = '';
  html += '<div class="card"><h3>Total Spend</h3><div class="value">' + fmt(totalSpend) + '</div></div>';
  html += '<div class="card"><h3>Total Impressions</h3><div class="value">' + fmtN(totalImpressions) + '</div></div>';
  html += '<div class="card"><h3>Total Clicks</h3><div class="value">' + fmtN(totalClicks) + '</div></div>';
  html += '<div class="card"><h3>Conversions</h3><div class="value">' + totalConversions.toFixed(1) + '</div></div>';
  html += '<div class="card"><h3>Avg CTR</h3><div class="value">' + avgCTR + '%</div></div>';
  html += '<div class="card"><h3>CPA</h3><div class="value">' + (cpa \!== 'N/A' ? fmt(parseFloat(cpa)) : cpa) + '</div></div>';
  document.getElementById('googleCards').innerHTML = html;

  var gCamps = {};
  gFiltered.forEach(function(r) {
    if (\!gCamps[r.campaign]) gCamps[r.campaign] = {spend:0,impressions:0,clicks:0,conversions:0};
    gCamps[r.campaign].spend += r.spend;
    gCamps[r.campaign].impressions += r.impressions;
    gCamps[r.campaign].clicks += r.clicks;
    gCamps[r.campaign].conversions += r.conversions;
  });
  var campHtml = '<table><thead><tr><th>Campaign</th><th style="text-align:right">Spend</th><th style="text-align:right">Impressions</th><th style="text-align:right">Clicks</th><th style="text-align:right">CTR</th><th style="text-align:right">CPC</th><th style="text-align:right">Conv</th><th style="text-align:right">CPA</th></tr></thead><tbody>';
  Object.keys(gCamps).forEach(function(name) {
    var c = gCamps[name];
    var ctr = c.impressions > 0 ? c.clicks / c.impressions : 0;
    var cpc = c.clicks > 0 ? c.spend / c.clicks : 0;
    var campCpa = c.conversions > 0 ? c.spend / c.conversions : 0;
    campHtml += '<tr><td style="font-weight:600">' + name + '</td>';
    campHtml += '<td style="text-align:right">' + fmt(c.spend) + '</td>';
    campHtml += '<td style="text-align:right">' + fmtN(c.impressions) + '</td>';
    campHtml += '<td style="text-align:right">' + fmtN(c.clicks) + '</td>';
    campHtml += '<td style="text-align:right">' + (ctr*100).toFixed(2) + '%</td>';
    campHtml += '<td style="text-align:right">' + fmt(cpc) + '</td>';
    campHtml += '<td style="text-align:right">' + c.conversions.toFixed(1) + '</td>';
    campHtml += '<td style="text-align:right">' + (campCpa > 0 ? fmt(campCpa) : '-') + '</td></tr>';
  });
  campHtml += '</tbody></table>';
  document.getElementById('googleCampaignTable').innerHTML = campHtml;

  var dates = [];
  var dateMap = {};
  gFiltered.forEach(function(r) {
    if (\!dateMap[r.date]) { dateMap[r.date] = {spend:0,impressions:0,clicks:0,conversions:0}; dates.push(r.date); }
    dateMap[r.date].spend += r.spend;
    dateMap[r.date].impressions += r.impressions;
    dateMap[r.date].clicks += r.clicks;
    dateMap[r.date].conversions += r.conversions;
  });
  dates.sort();
  var dHtml = '<table><thead><tr><th>Date</th><th>Day</th><th style="text-align:right">Spend</th><th style="text-align:right">Impressions</th><th style="text-align:right">Clicks</th><th style="text-align:right">CTR</th><th style="text-align:right">CPC</th><th style="text-align:right">Conv</th></tr></thead><tbody>';
  dates.forEach(function(d) {
    var r = dateMap[d];
    var ctr = r.impressions > 0 ? r.clicks / r.impressions : 0;
    var cpc = r.clicks > 0 ? r.spend / r.clicks : 0;
    dHtml += '<tr><td style="font-weight:600">' + fmtDate(d) + '</td><td>' + getDayShort(d) + '</td>';
    dHtml += '<td style="text-align:right">' + fmt(r.spend) + '</td>';
    dHtml += '<td style="text-align:right">' + fmtN(r.impressions) + '</td>';
    dHtml += '<td style="text-align:right">' + fmtN(r.clicks) + '</td>';
    dHtml += '<td style="text-align:right">' + (ctr*100).toFixed(2) + '%</td>';
    dHtml += '<td style="text-align:right">' + fmt(cpc) + '</td>';
    dHtml += '<td style="text-align:right">' + r.conversions.toFixed(1) + '</td></tr>';
  });
  dHtml += '</tbody></table>';
  document.getElementById('googleDailyTable').innerHTML = dHtml;
}



function renderGA4() {
  var ga = filterByDate(GA4_DATA, dFrom, dTo);
  var totalSessions = ga.reduce(function(s,r){return s+r.sessions;},0);
  var totalUsers = ga.reduce(function(s,r){return s+r.users;},0);
  var totalTx = ga.reduce(function(s,r){return s+r.transactions;},0);
  var cvr = totalSessions > 0 ? (totalTx/totalSessions*100).toFixed(2) : '0.00';

  var html = '';
  html += '<div class="card"><h3>Total Sessions</h3><div class="value">' + fmtN(totalSessions) + '</div></div>';
  html += '<div class="card"><h3>Total Users</h3><div class="value">' + fmtN(totalUsers) + '</div></div>';
  html += '<div class="card"><h3>Transactions</h3><div class="value">' + fmtN(totalTx) + '</div></div>';
  html += '<div class="card"><h3>Conversion Rate</h3><div class="value" style="color:' + (parseFloat(cvr) >= 2.5 ? 'var(--green)' : 'var(--gold)') + '">' + cvr + '%</div></div>';
  html += '<div class="card"><h3>Avg Sessions/Day</h3><div class="value">' + (ga.length > 0 ? fmtN(Math.round(totalSessions/ga.length)) : '0') + '</div></div>';
  document.getElementById('ga4Cards').innerHTML = html;

  var dHtml = '<table><thead><tr><th>Date</th><th>Day</th><th style="text-align:right">Sessions</th><th style="text-align:right">Users</th><th style="text-align:right">Transactions</th><th style="text-align:right">CVR</th></tr></thead><tbody>';
  ga.forEach(function(r) {
    var c = r.sessions > 0 ? (r.transactions/r.sessions*100).toFixed(2) : '0.00';
    dHtml += '<tr><td style="font-weight:600">' + fmtDate(r.date) + '</td><td>' + getDayShort(r.date) + '</td>';
    dHtml += '<td style="text-align:right">' + fmtN(r.sessions) + '</td>';
    dHtml += '<td style="text-align:right">' + fmtN(r.users) + '</td>';
    dHtml += '<td style="text-align:right;font-weight:600">' + r.transactions + '</td>';
    dHtml += '<td style="text-align:right;color:' + (parseFloat(c) >= 2.5 ? 'var(--green)' : 'var(--gold)') + '">' + c + '%</td></tr>';
  });
  dHtml += '</tbody></table>';
  document.getElementById('ga4DailyTable').innerHTML = dHtml;
}



function renderShopify() {
  var shop = filterByDate(SHOPIFY_DATA, dFrom, dTo);
  var totalOrders = shop.reduce(function(s,r){return s+r.orders;},0);
  var estRevenue = totalOrders * 54.99;
  var avgDaily = shop.length > 0 ? (totalOrders / shop.length).toFixed(1) : '0';

  var html = '';
  html += '<div class="card"><h3>Total Orders</h3><div class="value">' + fmtN(totalOrders) + '</div></div>';
  html += '<div class="card"><h3>Est. Revenue</h3><div class="value">' + fmt(estRevenue) + '</div></div>';
  html += '<div class="card"><h3>Avg Orders/Day</h3><div class="value">' + avgDaily + '</div></div>';
  document.getElementById('shopifyCards').innerHTML = html;

  var dHtml = '<table><thead><tr><th>Date</th><th>Day</th><th style="text-align:right">Orders</th><th style="text-align:right">Est. Revenue</th></tr></thead><tbody>';
  shop.forEach(function(r) {
    dHtml += '<tr><td style="font-weight:600">' + fmtDate(r.date) + '</td><td>' + getDayShort(r.date) + '</td>';
    dHtml += '<td style="text-align:right;font-weight:600">' + r.orders + '</td>';
    dHtml += '<td style="text-align:right">' + fmt(r.orders * 54.99) + '</td></tr>';
  });
  dHtml += '</tbody></table>';
  document.getElementById('shopifyDailyTable').innerHTML = dHtml;
}



function renderTikTok() {
  var tt = filterByDate(TIKTOK_DATA, dFrom, dTo);
  var totalViews = tt.reduce(function(s,r){return s+r.video_views;},0);
  var totalLikes = tt.reduce(function(s,r){return s+r.likes;},0);
  var totalShares = tt.reduce(function(s,r){return s+r.shares;},0);
  var totalComments = tt.reduce(function(s,r){return s+r.comments;},0);

  var html = '';
  html += '<div class="card"><h3>Total Views</h3><div class="value">' + fmtN(totalViews) + '</div></div>';
  html += '<div class="card"><h3>Total Likes</h3><div class="value">' + fmtN(totalLikes) + '</div></div>';
  html += '<div class="card"><h3>Total Shares</h3><div class="value">' + fmtN(totalShares) + '</div></div>';
  html += '<div class="card"><h3>Total Comments</h3><div class="value">' + fmtN(totalComments) + '</div></div>';
  html += '<div class="card"><h3>Engagement Rate</h3><div class="value">' + (totalViews > 0 ? ((totalLikes+totalShares+totalComments)/totalViews*100).toFixed(2) : '0.00') + '%</div></div>';
  document.getElementById('tiktokCards').innerHTML = html;

  var dHtml = '<table><thead><tr><th>Date</th><th>Day</th><th style="text-align:right">Views</th><th style="text-align:right">Likes</th><th style="text-align:right">Shares</th><th style="text-align:right">Comments</th></tr></thead><tbody>';
  tt.forEach(function(r) {
    dHtml += '<tr><td style="font-weight:600">' + fmtDate(r.date) + '</td><td>' + getDayShort(r.date) + '</td>';
    dHtml += '<td style="text-align:right">' + fmtN(r.video_views) + '</td>';
    dHtml += '<td style="text-align:right">' + r.likes + '</td>';
    dHtml += '<td style="text-align:right">' + r.shares + '</td>';
    dHtml += '<td style="text-align:right">' + r.comments + '</td></tr>';
  });
  dHtml += '</tbody></table>';
  document.getElementById('tiktokDailyTable').innerHTML = dHtml;
}



function renderVibe() {
  var vibe = filterByDate(VIBE_DATA, dFrom, dTo);
  var totalSpend = vibe.reduce(function(s,r){return s+r.spend;},0);
  var totalImpressions = vibe.reduce(function(s,r){return s+r.impressions;},0);
  var avgCPM = totalImpressions > 0 ? (totalSpend/totalImpressions*1000).toFixed(2) : '0.00';

  var html = '';
  html += '<div class="card"><h3>Total Spend</h3><div class="value">' + fmt(totalSpend) + '</div></div>';
  html += '<div class="card"><h3>Total Impressions</h3><div class="value">' + fmtN(totalImpressions) + '</div></div>';
  html += '<div class="card"><h3>Avg CPM</h3><div class="value">' + fmt(parseFloat(avgCPM)) + '</div></div>';
  document.getElementById('vibeCards').innerHTML = html;

  var vCamps = {};
  vibe.forEach(function(r) {
    if (\!vCamps[r.campaign]) vCamps[r.campaign] = {spend:0,impressions:0,days:0};
    vCamps[r.campaign].spend += r.spend;
    vCamps[r.campaign].impressions += r.impressions;
    vCamps[r.campaign].days += 1;
  });
  var campHtml = '<table><thead><tr><th>Campaign</th><th style="text-align:right">Spend</th><th style="text-align:right">Impressions</th><th style="text-align:right">CPM</th><th style="text-align:right">Days Active</th></tr></thead><tbody>';
  Object.keys(vCamps).forEach(function(name) {
    var c = vCamps[name];
    var cpm = c.impressions > 0 ? (c.spend / c.impressions * 1000).toFixed(2) : '0.00';
    campHtml += '<tr><td style="font-weight:600">' + name + '</td>';
    campHtml += '<td style="text-align:right">' + fmt(c.spend) + '</td>';
    campHtml += '<td style="text-align:right">' + fmtN(c.impressions) + '</td>';
    campHtml += '<td style="text-align:right">' + fmt(parseFloat(cpm)) + '</td>';
    campHtml += '<td style="text-align:right">' + c.days + '</td></tr>';
  });
  campHtml += '</tbody></table>';
  document.getElementById('vibeCampaignTable').innerHTML = campHtml;

  var dates = [];
  var dateMap = {};
  vibe.forEach(function(r) {
    if (\!dateMap[r.date]) { dateMap[r.date] = {spend:0,impressions:0}; dates.push(r.date); }
    dateMap[r.date].spend += r.spend;
    dateMap[r.date].impressions += r.impressions;
  });
  dates.sort();
  var dHtml = '<table><thead><tr><th>Date</th><th>Day</th><th style="text-align:right">Spend</th><th style="text-align:right">Impressions</th><th style="text-align:right">CPM</th></tr></thead><tbody>';
  dates.forEach(function(d) {
    var r = dateMap[d];
    var cpm = r.impressions > 0 ? (r.spend / r.impressions * 1000).toFixed(2) : '0.00';
    dHtml += '<tr><td style="font-weight:600">' + fmtDate(d) + '</td><td>' + getDayShort(d) + '</td>';
    dHtml += '<td style="text-align:right">' + fmt(r.spend) + '</td>';
    dHtml += '<td style="text-align:right">' + fmtN(r.impressions) + '</td>';
    dHtml += '<td style="text-align:right">' + fmt(parseFloat(cpm)) + '</td></tr>';
  });
  dHtml += '</tbody></table>';
  document.getElementById('vibeDailyTable').innerHTML = dHtml;
}



function renderIPScan() {
  var html = '';
  html += '<div class="summary-box"><strong>Last IP Scan:</strong> April 10, 2026. Active monitoring for unauthorized use of HangSmart\u00ae IP across domestic and international marketplaces.</div>';

  html += '<div class="section-subtitle">Known Infringers & Copycats</div>';

  html += '<div class="urgent-flag"><h4>VIVO MOUNT-NS100 (Amazon)</h4>';
  html += '<p><strong>Status:</strong> Known copycat. Replicates HangSmart no-stud TV mount design and function. Closely mimics the mounting mechanism covered under US Patent 12,460,669 B2 and Design Patent D887255S.</p>';
  html += '<p><strong>Action:</strong> Ongoing monitoring. Takedown notice prepared and on file at Legal@hangsmart.com.</p></div>';

  html += '<div class="urgent-flag"><h4>monTEK (Amazon/Website)</h4>';
  html += '<p><strong>Status:</strong> Known copycat. Product design and marketing claims closely mirror HangSmart\u00ae patented system. Multiple listings identified across Amazon and direct website.</p>';
  html += '<p><strong>Action:</strong> Ongoing monitoring. Enforcement documentation prepared.</p></div>';

  html += '<div class="section-subtitle" style="margin-top:24px">Authorized Resellers</div>';
  html += '<div class="anomaly-box success"><h4>Authorized Channel Partners</h4>';
  html += '<p><strong>AAAA World</strong> - Amazon authorized reseller<br>';
  html += '<strong>Walmart</strong> - Authorized retail partner<br>';
  html += '<strong>QVC/HSN</strong> - Authorized broadcast retail partner</p></div>';

  html += '<div class="section-subtitle" style="margin-top:24px">IP Portfolio</div>';
  html += '<div class="card">';
  html += '<table><thead><tr><th>Asset</th><th>Type</th><th>Number</th><th>Status</th></tr></thead><tbody>';
  html += '<tr><td style="font-weight:600">Utility Patent</td><td>Patent</td><td>US 12,460,669 B2</td><td><span class="tag tag-scale">Active</span></td></tr>';
  html += '<tr><td style="font-weight:600">Design Patent</td><td>Patent</td><td>D887255S</td><td><span class="tag tag-scale">Active</span></td></tr>';
  html += '<tr><td style="font-weight:600">HangSmart\u00ae</td><td>Trademark</td><td>Reg. 7363126</td><td><span class="tag tag-scale">Active</span></td></tr>';
  html += '<tr><td style="font-weight:600">Hang Smart TV\u00ae</td><td>Trademark</td><td>Reg. 6297248</td><td><span class="tag tag-scale">Active</span></td></tr>';
  html += '</tbody></table></div>';

  document.getElementById('ipScanContent').innerHTML = html;
}



function renderSuggestions() {
  var html = '';

  html += '<div class="section-subtitle">Meta Ads</div>';

  html += '<div class="anomaly-box" style="border-left-color:var(--red)">';
  html += '<h4>Pause Campaign B (Soundbar MOF/BOF) Immediately</h4>';
  html += '<p>1.37% CTR, $2.71 CPC, frequency at 2.45 (above 2.2 danger threshold). Every ad set and creative in this campaign is below minimum efficiency. Spending $520+/week with zero return signal. Pause today and reallocate budget to Campaign 3 or Campaign 4.</p></div>';

  html += '<div class="anomaly-box" style="border-left-color:var(--red)">';
  html += '<h4>Kill High-Waste Ad Sets in Campaign 2</h4>';
  html += '<p>Arthur Install (Ad Set 3) spent $1,377 at 1.53% CTR while Animation Testimonial Mashup in the same campaign runs at 3.81% CTR/$0.92 CPC. HangSmart CTV Reviews (Ad Set 1) burned $693 at 1.12% CTR with frequency at 2.08. Cut both and shift budget to top performers.</p></div>';

  html += '<div class="anomaly-box success">';
  html += '<h4>Scale Campaign 3 (Winning Ads) by 15-20%</h4>';
  html += '<p>3.83% CTR, $0.67 CPC, frequency still healthy at 1.52. This is the strongest campaign in the account by a wide margin. Has headroom to scale before hitting fatigue. Increase daily budget by $100-150 and monitor frequency weekly.</p></div>';

  html += '<div class="anomaly-box success">';
  html += '<h4>Scale Campaign 4 (MOF) - Strong Efficiency</h4>';
  html += '<p>2.69% CTR, $0.92 CPC with a healthy 1.40 frequency. This mid-funnel campaign is outperforming several TOF campaigns on efficiency. Consider a 10% budget increase to capture more retargeting opportunities.</p></div>';

  html += '<div class="anomaly-box warning">';
  html += '<h4>Prepare Creative Refresh for TOF Product Page Test</h4>';
  html += '<p>Frequency at 1.91 and rising. At current trajectory it hits 2.2 within 1-2 weeks. Performance is still solid (2.56% CTR, $1.27 CPC) but start building 2-3 replacement creatives now to swap in before fatigue hits.</p></div>';

  html += '<div class="section-subtitle" style="margin-top:32px">Google Ads</div>';

  html += '<div class="anomaly-box" style="border-left-color:var(--red)">';
  html += '<h4>Evaluate Brand | New Campaign - Zero Conversions</h4>';
  html += '<p>Spending ~$85-120/day with zero tracked conversions over the full period. If this is pure brand defense, acceptable. If it is supposed to drive sales, budget should shift to PMax Brand which is generating conversions at a reasonable CPA.</p></div>';

  html += '<div class="anomaly-box success">';
  html += '<h4>PMax Brand - Most Efficient Google Campaign</h4>';
  html += '<p>Generating the highest conversion volume per dollar spent. Consider increasing budget allocation by 15-20%.</p></div>';

  html += '<div class="anomaly-box warning">';
  html += '<h4>PMax 40 States - High CPA, Evaluate ROI</h4>';
  html += '<p>This geographic expansion campaign has inconsistent conversion data. Some days zero conversions on $80+ spend. Assess whether the broader geographic reach justifies the cost or if budget is better concentrated in the Top 10 States campaign.</p></div>';

  html += '<div class="section-subtitle" style="margin-top:32px">Website & CRO</div>';

  html += '<div class="anomaly-box success">';
  html += '<h4>Conversion Rate Holding Strong</h4>';
  html += '<p>CVR averaging 2.5%+ across the period. Site performance is solid. Primary growth lever is driving more qualified traffic rather than on-site optimization at this stage.</p></div>';

  html += '<div class="anomaly-box warning">';
  html += '<h4>Weekend Traffic Opportunity</h4>';
  html += '<p>Weekends consistently outperform weekdays by 15-20% in transactions. Consider increasing weekend ad spend across Meta and Google to capture this higher-intent audience. Vibe CTV could also benefit from weekend-weighted scheduling.</p></div>';

  html += '<div class="section-subtitle" style="margin-top:32px">Multi-Channel Strategy</div>';

  html += '<div class="anomaly-box info">';
  html += '<h4>Amazon Dominance in Unit Volume</h4>';
  html += '<p>Amazon accounts for the majority of total unit sales. The blended ROAS calculation confirms that ads are driving significant off-platform purchases. Continue feeding Amazon/Walmart sales data weekly to improve attribution accuracy over time.</p></div>';

  html += '<div class="anomaly-box info">';
  html += '<h4>Walmart Soundbar Discontinued - Monitor TV Mount Performance</h4>';
  html += '<p>Soundbar sales at Walmart have ceased as the product is being remade. Walmart TV mount (TV2000) sales remain strong at 500-800+ units/week. When the new soundbar launches, re-evaluate Walmart soundbar advertising.</p></div>';

  html += '<div class="anomaly-box success">';
  html += '<h4>Vibe CTV - Strong Awareness Play</h4>';
  html += '<p>Running ~$350/day across TOF Traffic and Retargeting campaigns. CPMs are healthy ($11-$23 range). CTV is a top-of-funnel awareness driver that feeds the entire conversion ecosystem. Continue at current spend levels.</p></div>';

  document.getElementById('suggestionsContent').innerHTML = html;
}



function renderFluctuationReport() {
  var html = '';

  html += '<div class="summary-box">';
  html += '<strong>Fluctuation Summary (March 23 - April 5, 2026):</strong> Over this 14-day analysis period, total blended transactions ranged from approximately 175-350+ units per day across all channels. The primary patterns observed are a consistent weekend lift (Saturdays and Sundays outperform weekdays by 15-25% in transaction volume), stable Shopify conversion rates holding at 2.3-2.9%, and Amazon order volume tracking in line with ad spend levels. No catastrophic single-day drops were identified, though weekday troughs (particularly Mondays and Wednesdays) show softer performance that aligns with typical e-commerce seasonality rather than campaign-level issues.';
  html += '</div>';

  html += '<div class="section-subtitle">Correlation Analysis: What Is Driving Fluctuations</div>';

  html += '<div class="anomaly-box success">';
  html += '<h4>Weekend Effect (Confirmed Driver)</h4>';
  html += '<p>Saturdays and Sundays consistently produce the highest transaction days across all channels. March 22 (Sat) and March 23 (Sun) tied for the highest Shopify transaction days at 55 and 63 respectively. Amazon and Walmart estimates also peak on weekends. This is a structural pattern - consumers have more time to research and purchase home improvement products on weekends.</p></div>';

  html += '<div class="anomaly-box success">';
  html += '<h4>Ad Spend Correlation (Moderate-Strong)</h4>';
  html += '<p>Days with total ad spend above $3,500 (Meta + Google + Vibe combined) correlate with higher same-day and next-day Shopify orders. The relationship is strongest with Meta spend, where Campaign 3 (Winning Ads) CTR remains above 3.5% and drives consistent click volume. Google PMax Top 10 States shows the strongest spend-to-conversion correlation on the Google side.</p></div>';

  html += '<div class="anomaly-box warning">';
  html += '<h4>Mid-Week Softness (Recurring Pattern)</h4>';
  html += '<p>Tuesdays and Wednesdays show consistently lower Shopify orders (35-41 range vs. 47-63 on weekends). This is not campaign-driven - it is consumer behavior. GA4 sessions also dip mid-week, confirming lower overall traffic rather than a conversion problem.</p></div>';

  html += '<div class="section-subtitle" style="margin-top:24px">What Is Not Driving Fluctuations</div>';

  html += '<div class="anomaly-box info">';
  html += '<h4>No Platform Outages Detected (March 23 - April 5)</h4>';
  html += '<p>No major Amazon, Walmart, or Shopify platform outages were reported during this analysis period that would have impacted sales. All daily variations fall within normal operating ranges.</p></div>';

  html += '<div class="anomaly-box info">';
  html += '<h4>No Campaign Pauses or Budget Changes</h4>';
  html += '<p>All 8 Meta campaigns, 4 Google campaigns, and 2 Vibe campaigns ran continuously throughout the period. Daily spend variance was within normal algorithmic optimization ranges (Meta spend ranged $2,674-$3,195/day). No manual budget cuts or pauses explain any dips.</p></div>';

  html += '<div class="section-subtitle" style="margin-top:24px">Macro & Micro Context</div>';

  html += '<div class="anomaly-box warning">';
  html += '<h4>Spring Seasonality in Home Improvement</h4>';
  html += '<p>March-April traditionally sees increased home improvement purchasing intent. The upward trend in Amazon weekly unit volume (from ~1,100/week in late January to ~1,500-1,800/week in early March) aligns with this seasonal pattern. This is a tailwind for HangSmart through May.</p></div>';

  html += '<div class="anomaly-box info">';
  html += '<h4>No Major Economic Events Impacting Consumer Spending</h4>';
  html += '<p>No significant economic disruptions, tariff announcements, or consumer confidence shifts during this analysis window that would materially impact a $49-55 consumer purchase decision.</p></div>';

  document.getElementById('fluctuationReport').innerHTML = html;
}



function renderStrategicRecs() {
  var html = '';

  html += '<div class="urgent-flag"><h4>1. IMMEDIATE: Pause Campaign B Soundbar</h4>';
  html += '<p>Every metric is below threshold. $520+/week wasted. Redirect to Campaign 3 or Campaign 4 today. Expected weekly savings: $500+ redirected to campaigns with 3x+ better efficiency.</p></div>';

  html += '<div class="urgent-flag"><h4>2. IMMEDIATE: Cut Underperforming Ad Sets in Campaign 2</h4>';
  html += '<p>Arthur Install and CTV Reviews ad sets are burning $2,070/week combined at below-average CTR. The top creative in Campaign 2 (Animation Testimonial Mashup) proves the campaign concept works - the problem is specific ad sets, not the campaign.</p></div>';

  html += '<div class="anomaly-box success">';
  html += '<h4>3. HIGH PRIORITY: Scale Campaign 3 Budget +15-20%</h4>';
  html += '<p>Best CTR (3.83%), best CPC ($0.67), healthy frequency (1.52). This campaign has clear headroom. Increase daily budget by $100-150. Monitor frequency - if it stays below 2.0 after scaling, push further.</p></div>';

  html += '<div class="anomaly-box success">';
  html += '<h4>4. HIGH PRIORITY: Increase Weekend Ad Spend Across All Channels</h4>';
  html += '<p>Weekend consistently produces 15-25% more transactions. Implement day-parting or weekend budget multipliers on Meta (Campaign 3 and Campaign 1 especially), Google PMax, and Vibe CTV. Target 20% higher spend on Fri-Sun.</p></div>';

  html += '<div class="anomaly-box warning">';
  html += '<h4>5. MEDIUM: Build 2-3 Fresh Creatives for TOF Product Page Test</h4>';
  html += '<p>Frequency at 1.91 and climbing. Performance is still good but the clock is ticking. Have replacement creatives ready to swap in within 7-10 days.</p></div>';

  html += '<div class="anomaly-box warning">';
  html += '<h4>6. MEDIUM: Evaluate Brand | New Google Campaign</h4>';
  html += '<p>Running $85-120/day with zero conversions. If this is brand defense, keep it. If it is supposed to drive sales, reallocate to PMax Brand which is the most efficient Google campaign.</p></div>';

  html += '<div class="anomaly-box info">';
  html += '<h4>7. ONGOING: Continue Weekly Amazon/Walmart Data Feeds</h4>';
  html += '<p>Each week of blended data improves attribution accuracy. Over the next 4-6 weeks, the correlation between ad spend changes and marketplace sales will become statistically significant enough to build predictive blended ROAS models.</p></div>';

  document.getElementById('strategicRecs').innerHTML = html;
}



function renderAll() {
  renderOverview();
  renderMeta();
  renderGoogle();
  renderGA4();
  renderShopify();
  renderTikTok();
  renderVibe();
  renderIPScan();
  renderSuggestions();
  renderFluctuationReport();
  renderStrategicRecs();
}



window.onload = function() {
  var auth = tryStorage(function() { return localStorage.getItem('hs_auth'); });
  if (auth === 'true') {
    document.getElementById('loginOverlay').classList.add('hidden');
    document.getElementById('dashboardWrap').style.display = 'block';
    renderAll();
  }
  document.getElementById('pwInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') checkPassword();
  });
};
