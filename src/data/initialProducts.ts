import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    title: 'Hand-Stamped Turquoise Cuff',
    sku: 'B-TQ-001',
    price: 850.00,
    category: 'Cuff & Arm',
    status: 'In Stock',
    primaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs0RYPwzjIrefgxyEqOUfhT03OcHfcyGMc_eFQ3Y-hgGcTv-f9XVyP5oR7iS-K5qBw9GAVixgh14jBv1bLoUHXCKHSmUBMW4Y3JO6vT3nUipfmKiSjqd69JJghtXMin8CZO_eV2L7CWJ0-jltjRgN6ufnkx3SFEI-DKB1WWX7O9o7lgzBMNVWbgNZBg0aRG9hAasdLyIfelm8UfLYhXyvdvk0oLhkiH5Usl1OvKLbvoglJsObg6ujG',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCs0RYPwzjIrefgxyEqOUfhT03OcHfcyGMc_eFQ3Y-hgGcTv-f9XVyP5oR7iS-K5qBw9GAVixgh14jBv1bLoUHXCKHSmUBMW4Y3JO6vT3nUipfmKiSjqd69JJghtXMin8CZO_eV2L7CWJ0-jltjRgN6ufnkx3SFEI-DKB1WWX7O9o7lgzBMNVWbgNZBg0aRG9hAasdLyIfelm8UfLYhXyvdvk0oLhkiH5Usl1OvKLbvoglJsObg6ujG',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDESOU9YoR-ILdpzaDGGvxzosYvsbLgpTh8mYVvGL5-f9TV426LsP7gQS35shf4yP30eA26sqm8RmK0RfXJ36T82Z1rxASFzO8KEa_U-0vccEw1cXTRcDyjQ72c7tT4uMC5jRM8JTep5TwnmCxA2X2atY5xLdWLpE2vaJEpKui62oMonOGj_TE1eapbaNXPuo8gEv1rWfG8WMZ7T4MmLCajZAM63GH2LsBnA8f_5fZ_N1bQOs0Yum3',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBM9-u7VAQDYZVR-fJ_t_ZwM_UnYOtPr1GkTsy2tD4ghH02nI9j0UM1lMyOqSJ__x28_uQbaaR21W56eNvyJTEZfmltSZlvwtwJaOubdImKhda6Qpw05oCJUjfYbsHVfmcxu47V6uxT-weupJNpVxgRDW455jL50DkvCqGrcDq6GgH9fBB9h81FfmhYCbB5qAWig-YtJFmog04ZqwZ40bjchVKMCZpTQi3NrROvailOF-G58M3vphNh'
    ],
    description: 'A masterclass in traditional silversmithing, this heavy-gauge sterling silver cuff features a striking piece of natural Kingman turquoise. Each stamp is individually struck by hand, creating a rhythmic pattern that honors the rugged landscapes of the Southwest.',
    materials: ['.925 Sterling Silver', 'Natural Kingman Turquoise'],
    stoneOrigin: 'Sourced directly from the Kingman mine in Arizona. Untreated and naturally stabilized, exhibiting deep blue hues with a classic golden web matrix.',
    silverDetails: '.925 Sterling Silver, heavily oxidized for contrast and hand-polished to a soft patina.',
    featured: true,
    sizingGuideType: 'cuff'
  },
  {
    id: 'prod-2',
    title: 'Navajo Revival Shield Ring',
    sku: 'R-TQ-042',
    price: 425.00,
    category: 'Rings',
    status: 'In Stock',
    primaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFb_hFhiTvSGJZR-N02kcsGwzwILOU1uKsw0XQjjasPLyzwwZiHsN7og7mTXDotJ8GqQzWq7jyyAfSBidjOoyZE42rJEU-EEq6F0SMyytdCk3y3HV7HxAT-0IhVAz0XZsWwIlb-1yuNdwRpAR6FPtrx-kPjP_kta1ipG74UGeAGADiHkQWAfxTj9AYUbxj4j0RXTahoOR700nUHQUcm-kubItEb2RkoLQtA9LTT0dRKgFbiHSl67xV',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAFb_hFhiTvSGJZR-N02kcsGwzwILOU1uKsw0XQjjasPLyzwwZiHsN7og7mTXDotJ8GqQzWq7jyyAfSBidjOoyZE42rJEU-EEq6F0SMyytdCk3y3HV7HxAT-0IhVAz0XZsWwIlb-1yuNdwRpAR6FPtrx-kPjP_kta1ipG74UGeAGADiHkQWAfxTj9AYUbxj4j0RXTahoOR700nUHQUcm-kubItEb2RkoLQtA9LTT0dRKgFbiHSl67xV',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBovWEVyAmJTlgU_fowhUEjuoWuM7-e4TPK_W2ICzNRfYfX9JJzKz6gnnNEpWaaXL3daPRNQbfyhbu_NdkjCrsCEIT4oAuf0nbU_SymXu_N_Q-fJr3WyLsKqfPwpwKX9lqA9GTiRI2g_MdUeSG9Ifde7J4S8JXqjTVWqpSC4jqLmbRTvD-FP9-QuZUb8RHbbbOG8sJ_0c3o1mQF-nDeXtkkfXi0nSce0EROSfRuYlQ9HnFsyy4VzNBn',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_MCcC7uq7n1mtPU0r48lAD3DaI2XR4zWYZTHgfK_R-nI8TFhMbNe1ovTa357Vo1qtItYdhYlg2XSY4zGpP4JSDWplU3cVaJ_1mFRBwLblP2_sVF70HiF9eVHo0HKC64abFwW9N6h1GDxqjCOxsTPfqqICTW-njmbJB5adoDcwJDDNX9pSrWzqOr__vYL2s9f3FjNrawYB3AgRNDlXBsARhfeO-XawWFz2J1X6vhd7uzxZDqmB75Ck'
    ],
    description: 'A statement ring honoring historic southwestern silversmithing. Features a prominent oval turquoise cabochon resting in a hand-carved serrated bezel with hammered side shanks.',
    materials: ['.925 Sterling Silver', 'Royston Turquoise'],
    stoneOrigin: 'Ethically mined in Tonopah, Nevada. Characterized by vibrant teal-to-green tones with dark chocolate matrix veining.',
    silverDetails: 'Recycled sterling silver, oxidized recesses, hand-buffed finish.',
    featured: true,
    sizingGuideType: 'ring'
  },
  {
    id: 'prod-3',
    title: 'White Buffalo Heavy Pendant',
    sku: 'N-WB-018',
    price: 310.00,
    category: 'Necklaces',
    status: 'In Stock',
    primaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAabwLi1jVOOZnL-XiYgnmQCPDBeV-tibQgkeGNinCR8n7Ij6nERzN8H0euURstpk6cqr6JVET_hHXtNuitmWVRdY4rqMknsWvFzHciUYyvWEVwI1cIKSu5joyC6Q30Jj2-F0XTaltkkbU72QvDrG6xXX0mvCfbueMymhEU4GRedBCzBciukilx25GbRgNRdB1eH83kGnGXnoTqLTEMSQN6-ekreWWbEzaL70feqtK7fAYstdKo36I3',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAabwLi1jVOOZnL-XiYgnmQCPDBeV-tibQgkeGNinCR8n7Ij6nERzN8H0euURstpk6cqr6JVET_hHXtNuitmWVRdY4rqMknsWvFzHciUYyvWEVwI1cIKSu5joyC6Q30Jj2-F0XTaltkkbU72QvDrG6xXX0mvCfbueMymhEU4GRedBCzBciukilx25GbRgNRdB1eH83kGnGXnoTqLTEMSQN6-ekreWWbEzaL70feqtK7fAYstdKo36I3',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDcwple01zS-yjUYPs5KRRsOlg_JN0ZyUUNZj_Hs1ukx-sdyT8I1iBhqzxVRy1Gz8cJ208MC8XA927DKuEOkxOWyE-S1wldv3-1iiRSq8Pl9C9KqSV29NevMK0wSdXzK3DzVvKstoZneINyQeWUdd9oDcaTe14F6TLPTjjQZcQkkihZv9AiLWPuIUwZcx8fXdyfMSsrw4tcKnDFJz5_rAsmE9G9Nou9pFGY5vHinX42Ytr_zPeAmdtW'
    ],
    description: 'Forged from solid sterling silver with an organic shadowbox frame, housing a rare White Buffalo stone. Suspended from a heavy 24-inch oxidized sterling link chain.',
    materials: ['.925 Sterling Silver', 'White Buffalo Calcite'],
    stoneOrigin: 'Discovered in Tonopah, Nevada. Known for its stark pure white background and deep black manganese web matrix.',
    silverDetails: 'Custom shadowbox bezel with rope-twist silver border.',
    featured: true,
    sizingGuideType: 'necklace'
  },
  {
    id: 'prod-4',
    title: 'Rigid Upper Arm Cuff - Desert Sun',
    sku: 'B-AR-009',
    price: 680.00,
    category: 'Cuff & Arm',
    status: 'In Stock',
    primaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3TDGrh6aqGiVrEjOF-3DW-NsU9NCgMkYCSu5lDaqKeR6wmWrHfIuYRaaWc1fhDVMq99K5nqyLQWip661ftGThM7QSVgYOfkuitMMw877pP5aFPyMh9RpG0zDzSrPqcCPyAcJ4DtBy6u95VhRyIJ2TmpUywPfh9jxyqFRvte9vYVrkqmmnYxx2OFmazEb76sLNuGCGarxVAdSRBKOMVkjoYeEfh5lnP_5FGReVA4AiYL32YYY0kP7Z',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3TDGrh6aqGiVrEjOF-3DW-NsU9NCgMkYCSu5lDaqKeR6wmWrHfIuYRaaWc1fhDVMq99K5nqyLQWip661ftGThM7QSVgYOfkuitMMw877pP5aFPyMh9RpG0zDzSrPqcCPyAcJ4DtBy6u95VhRyIJ2TmpUywPfh9jxyqFRvte9vYVrkqmmnYxx2OFmazEb76sLNuGCGarxVAdSRBKOMVkjoYeEfh5lnP_5FGReVA4AiYL32YYY0kP7Z',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1JFJVV9e97J2ir-IB-kvkfOjopR2Syj9UMEogLrKO_BfprYr8eAktwM3dQ6y6_43D8vDb81LDTRvDTYhJlc-5LRGxmJCIa1uI9WUJqLZuzfrhTRlp3307PirqPxf1FHPiotYQbsiB3H-Ur20ZHs1eTNh5qbb0LB3vYcj5Wq2BcHWKuyBI15uNIkXBz-f_X4vNX1JlRZsbmBgEqnFtVIBy4WaIZl87FzFTTNAz9aco7npeETYJewx4'
    ],
    description: 'An audacious, heavy-gauge upper arm band designed for a firm, contoured fit around the bicep/upper arm. Stamped with sunburst and lightning symbols forged by hand-carved steel punches.',
    materials: ['Heavy-Gauge .925 Sterling Silver'],
    stoneOrigin: 'Solid Sterling Silver with deeply stamped Southwestern geometric symbolism.',
    silverDetails: 'Hand-stamped heavy silver plate, contoured curvature.',
    featured: false,
    sizingGuideType: 'cuff'
  },
  {
    id: 'prod-5',
    title: 'Hammered Stacking Bangles (Set of 7)',
    sku: 'B-SL-108',
    price: 180.00,
    category: 'Cuff & Arm',
    status: 'In Stock',
    primaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHTMlkPKcPzivJklV82kYvLXSRt8wIRinm66KOFekZPZ7wVADWv25q38pF6Yzs9DSxNaRAwqbhjYYzipwnXXiuz-UD5Psi6hsD2JbvKujiodoXIry6m3dqw15nXOyDHWDlzAdFVmz21yrnhquI_MbaNOriKt9021_L6aT6R7WaV4mkh_y9Kh0tqN5W6Wya85lljYNxkIBsD1BqoOmtUv-0kgt2xuIz2AyeSs2bhPF4xDECAeiaVQWa',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBHTMlkPKcPzivJklV82kYvLXSRt8wIRinm66KOFekZPZ7wVADWv25q38pF6Yzs9DSxNaRAwqbhjYYzipwnXXiuz-UD5Psi6hsD2JbvKujiodoXIry6m3dqw15nXOyDHWDlzAdFVmz21yrnhquI_MbaNOriKt9021_L6aT6R7WaV4mkh_y9Kh0tqN5W6Wya85lljYNxkIBsD1BqoOmtUv-0kgt2xuIz2AyeSs2bhPF4xDECAeiaVQWa'
    ],
    description: 'Seven individual sterling silver bangles, each forged with varied hammer textures—ranging from fine ball-peen ripple to coarse rock facets. Creates a melodic clink and luminous light play.',
    materials: ['.925 Solid Sterling Silver Wire'],
    stoneOrigin: 'Pure solid silver forged on the anvil.',
    silverDetails: 'Varying wire gauges and hand-hammered textures.',
    featured: false,
    sizingGuideType: 'cuff'
  },
  {
    id: 'prod-6',
    title: 'Lapis Wire-wrap Pendant',
    sku: 'N-LP-012',
    price: 185.00,
    category: 'Necklaces',
    status: 'Out of Stock',
    primaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp8F_3cSiLgA4azH0rjJCM38jSb9ibADLuJkA_7_1f2JKjc-AaTydSgJwMP5_sFw08_xP9yIIO_w0mVQmELEVDlwBsk_I7oKvnTLuSIR3GPmoUQy2ahn2p--7nJFX-iuxcsc71njmezv8JlSmAwNUPe5Icve_TlbmGOQnMbn5xh424Dp5XNmAj6WDFZ3gQXuULbYDvkMsCDxpxCcfEV7iWpPfn_RJ3S7cBHLJJuOAPefp0F_M5Oq4U',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAp8F_3cSiLgA4azH0rjJCM38jSb9ibADLuJkA_7_1f2JKjc-AaTydSgJwMP5_sFw08_xP9yIIO_w0mVQmELEVDlwBsk_I7oKvnTLuSIR3GPmoUQy2ahn2p--7nJFX-iuxcsc71njmezv8JlSmAwNUPe5Icve_TlbmGOQnMbn5xh424Dp5XNmAj6WDFZ3gQXuULbYDvkMsCDxpxCcfEV7iWpPfn_RJ3S7cBHLJJuOAPefp0F_M5Oq4U'
    ],
    description: 'A raw, unpolished piece of natural ultramarine lapis lazuli bound tightly in heavy hand-twisted sterling silver wire. Suspended on a textured leather cord with silver end-caps.',
    materials: ['.925 Sterling Silver Wire', 'Natural Afghan Lapis Lazuli'],
    stoneOrigin: 'Deep royal blue stone with brassy golden pyrite flecks throughout.',
    silverDetails: 'Hand-formed wire bale and twisting.',
    featured: false,
    sizingGuideType: 'necklace'
  },
  {
    id: 'prod-7',
    title: 'Deep-Veined Jasper Anvil Ring',
    sku: 'R-JS-019',
    price: 390.00,
    category: 'New Arrivals',
    status: 'In Stock',
    primaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8q42f2Pm-bxYtnoFOEI3WJAX3qRotbrZywi_shAwqAvjP_PNchesxHFSWue1s5CjCdJFiCbIscaLgx8M7Bsigi7XCYuoqP6gfIN0ch18lL_12zfNSyClWij_4dkzLvjEja7k-7ETTINhqJ41iHzGwh80zDZA0QAOk8__C2NDpCyuOoQcPxbjyhAm6jbZsCAqQ8mFqIUTzHTqJeP2qvD010iz_TjwzpMGQV-kQRyxc-EIkfMODgdlL',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8q42f2Pm-bxYtnoFOEI3WJAX3qRotbrZywi_shAwqAvjP_PNchesxHFSWue1s5CjCdJFiCbIscaLgx8M7Bsigi7XCYuoqP6gfIN0ch18lL_12zfNSyClWij_4dkzLvjEja7k-7ETTINhqJ41iHzGwh80zDZA0QAOk8__C2NDpCyuOoQcPxbjyhAm6jbZsCAqQ8mFqIUTzHTqJeP2qvD010iz_TjwzpMGQV-kQRyxc-EIkfMODgdlL'
    ],
    description: 'Fresh from the workbench: A heavy-cut, deep-veined red and moss jasper stone anchored in a thick-walled sterling silver socket bezel on a split-shank band.',
    materials: ['.925 Sterling Silver', 'Deep-Veined Picture Jasper'],
    stoneOrigin: 'Mined in Owyhee Canyon, Oregon. Reminiscent of southwestern rock strata and desert canyon sunset hues.',
    silverDetails: 'Oxidized heavy shank with silver bead accents.',
    featured: true,
    sizingGuideType: 'ring'
  },
  {
    id: 'prod-8',
    title: 'One-of-a-Kind Ceremonial Naja Necklace',
    sku: 'N-NJ-001',
    price: 1250.00,
    category: 'New Arrivals',
    status: 'Sold',
    primaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcwple01zS-yjUYPs5KRRsOlg_JN0ZyUUNZj_Hs1ukx-sdyT8I1iBhqzxVRy1Gz8cJ208MC8XA927DKuEOkxOWyE-S1wldv3-1iiRSq8Pl9C9KqSV29NevMK0wSdXzK3DzVvKstoZneINyQeWUdd9oDcaTe14F6TLPTjjQZcQkkihZv9AiLWPuIUwZcx8fXdyfMSsrw4tcKnDFJz5_rAsmE9G9Nou9pFGY5vHinX42Ytr_zPeAmdtW',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDcwple01zS-yjUYPs5KRRsOlg_JN0ZyUUNZj_Hs1ukx-sdyT8I1iBhqzxVRy1Gz8cJ208MC8XA927DKuEOkxOWyE-S1wldv3-1iiRSq8Pl9C9KqSV29NevMK0wSdXzK3DzVvKstoZneINyQeWUdd9oDcaTe14F6TLPTjjQZcQkkihZv9AiLWPuIUwZcx8fXdyfMSsrw4tcKnDFJz5_rAsmE9G9Nou9pFGY5vHinX42Ytr_zPeAmdtW'
    ],
    description: 'An exceptional heirloom piece featuring a crescent-shaped Naja pendant with five matched Bisbee turquoise stones strung on double strands of hand-fluted bench beads.',
    materials: ['.925 Sterling Silver', 'Bisbee Turquoise'],
    stoneOrigin: 'Historical Bisbee Mine, Lavender Pit, Arizona.',
    silverDetails: 'Hand-turned silver beads (bench pearls) and stamped Naja crescent.',
    featured: false,
    sizingGuideType: 'necklace'
  }
];
