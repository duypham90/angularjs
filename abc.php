<?php
$parent = 'root';
$data = [
    'REPORT_AREA' => [
        '2018' => [
            'daily' => [
                // cache for booking
                '1_bk' => [
                    "$parent" => [1, 30]
                ],
                '2_bk' => [1, 30],
                '3_bk' => [1, 30],
                '4_bk' => [1, 30],
                '5_bk' => [1, 30],
                '6_bk' => [1, 30],
                '7_bk' => [1, 30],
                '8_bk' => [1, 30],
                '9_bk' => [1, 30],
                '10_bk' => [1, 30],
                '11_bk' => [1, 30],
                '12_bk' => [1, 30],

                // cache for participant
                '1_pt' => [1, 30],
                '2_pt' => [1, 30],
                '3_pt' => [1, 30],
                '4_pt' => [1, 30],
                '5_pt' => [1, 30],
                '6_pt' => [1, 30],
                '7_pt' => [1, 30],
                '8_pt' => [1, 30],
                '9_pt' => [1, 30],
                '10_pt' => [1, 30],
                '11_pt' => [1, 30],
                '12_pt' => [1, 30]
            ],
            'weekly' => [
                // cache for booking
                '0_bk' => [1, 13],
                '1_bk' => [14, 27],
                '2_bk' => [28, 38],
                '3_bk' => [39, 52],

                // cache for participant
                '0_pt' => [1, 13],
                '1_pt' => [14, 27],
                '2_pt' => [28, 38],
                '3_pt' => [39, 52],
            ],
            'monthly' => [
                // cache for booking
                '0_bk' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                '1_bk' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                '2_bk' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

                // cache for participant
                '0_pt' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                '1_pt' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                '2_pt' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            ]
        ]
    ],
];

$data = [
    'REPORT_PRODUCT' => [
        '2018' => [
            'daily' => [
                // cache for booking
                '1_bk' => [1, 30],
                '2_bk' => [1, 30],
                '3_bk' => [1, 30],
                '4_bk' => [1, 30],
                '5_bk' => [1, 30],
                '6_bk' => [1, 30],
                '7_bk' => [1, 30],
                '8_bk' => [1, 30],
                '9_bk' => [1, 30],
                '10_bk' => [1, 30],
                '11_bk' => [1, 30],
                '12_bk' => [1, 30],

                // cache for participant
                '1_pt' => [1, 30],
                '2_pt' => [1, 30],
                '3_pt' => [1, 30],
                '4_pt' => [1, 30],
                '5_pt' => [1, 30],
                '6_pt' => [1, 30],
                '7_pt' => [1, 30],
                '8_pt' => [1, 30],
                '9_pt' => [1, 30],
                '10_pt' => [1, 30],
                '11_pt' => [1, 30],
                '12_pt' => [1, 30]
            ],
            'weekly' => [
                // cache for booking
                '0_bk' => [1, 13],
                '1_bk' => [14, 27],
                '2_bk' => [28, 38],
                '3_bk' => [39, 52],

                // cache for participant
                '0_pt' => [1, 13],
                '1_pt' => [14, 27],
                '2_pt' => [28, 38],
                '3_pt' => [39, 52],
            ],
            'monthly' => [
                // cache for booking
                '0_bk' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                '1_bk' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                '2_bk' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

                // cache for participant
                '0_pt' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                '1_pt' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                '2_pt' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            ]
        ]
    ],
];

$activityId = 'acId';

// chay report bat buoc clear het cache theo:
// - daily
// weekly
// monthly
// 100 activity => 100 key[]
$data = [
    'REPORT_PLAN' => [
        '2018' => [
            'daily' => [
                // cache for booking

                "0_bk_$activityId" => [1, 30],
                "1_bk_$activityId" => [1, 30],
                "2_bk_$activityId" => [1, 30],
                "3_bk_$activityId" => [1, 30],
                "4_bk_$activityId" => [1, 30],
                "5_bk_$activityId" => [1, 30],
                "6_bk_$activityId" => [1, 30],
                "7_bk_$activityId" => [1, 30],
                "8_bk_$activityId" => [1, 30],
                "9_bk_$activityId" => [1, 30],
                "10_bk_$activityId" => [1, 30],
                "11_bk_$activityId" => [1, 30],
                "12_bk_$activityId" => [1, 30],

                // cache for participant
                "0_pt_$activityId" => [1, 30],
                "1_pt_$activityId" => [1, 30],
                "2_pt_$activityId" => [1, 30],
                "3_pt_$activityId" => [1, 30],
                "4_pt_$activityId" => [1, 30],
                "5_pt_$activityId" => [1, 30],
                "6_pt_$activityId" => [1, 30],
                "7_pt_$activityId" => [1, 30],
                "8_pt_$activityId" => [1, 30],
                "9_pt_$activityId" => [1, 30],
                "10_pt_$activityId" => [1, 30],
                "11_pt_$activityId" => [1, 30],
                "12_pt_$activityId" => [1, 30],
            ],
            'weekly' => [
                // cache for booking
                "0_bk_$activityId" => [1, 13],
                "1_bk_$activityId" => [14, 27],
                "2_bk_$activityId" => [28, 38],
                "3_bk_$activityId" => [39, 52],

                // cache for participant
                "0_pt_$activityId" => [1, 13],
                "1_pt_$activityId" => [14, 27],
                "2_pt_$activityId" => [28, 38],
                "3_pt_$activityId" => [39, 52],
            ],
            'monthly' => [
                // cache for booking
                "0_bk_$activityId" => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "1_bk_$activityId" => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "2_bk_$activityId" => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

                // cache for participant
                "0_pt_$activityId" => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "1_pt_$activityId" => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                "2_pt_$activityId" => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            ]
        ]
    ],
];
