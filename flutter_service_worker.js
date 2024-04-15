'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "74f47ea01f7e9ba8d14408d3e18a4b6a",
"assets/AssetManifest.bin.json": "58a8dcd03737bbd48876152cd22cfc6a",
"assets/AssetManifest.json": "97c2372cc4201db2d64840592d564604",
"assets/assets/audio/bg_music.mp3": "c492e78cab1d1d0737b5cac5ee74a9a8",
"assets/assets/audio/box_counting.mp3": "9d6d1a0a4d435c5f68b110f6483897a8",
"assets/assets/audio/box_open.mp3": "a3d40e59b7c9df0a26bd772c662bb14b",
"assets/assets/audio/box_pop.mp3": "29d67855e595cc5ec1cf08a6495dd964",
"assets/assets/audio/coin_splash.mp3": "7d72b95787740a98926409bbc00e4cad",
"assets/assets/audio/door_bell.mp3": "cc3ad1883c3cfc3b8ac7f7add1e21081",
"assets/assets/audio/multipier_bonus.mp3": "bade26187e92c4a163b513ff16e78a87",
"assets/assets/audio/open_door.mp3": "1950d52a6e09b78afa6e26f8e5eb4b90",
"assets/assets/audio/open_pop.mp3": "7fe15a533099e95707be6ca049b0a2c2",
"assets/assets/audio/open_shining.mp3": "84c1b08afa80a2c89771b0bc4d6fa0eb",
"assets/assets/audio/ppx_bell.mp3": "844f070b5f84cf6ec85aae5c5dba8f7f",
"assets/assets/audio/ppx_cny_music.mp3": "7a321687097a586528c39cac96b9ec6e",
"assets/assets/audio/ppx_gift_music.mp3": "2de0cb10b8af080bf12a3b968dbb934b",
"assets/assets/audio/ppx_raya_music.mp3": "d31719eca303500a5c55376c4ab4ebee",
"assets/assets/audio/ppx_xmas_music.mp3": "0a79441eab8d076c3ce92ab0fc128fde",
"assets/assets/bottom/bottom_page_deco.png": "1abb34b4a26590743d847c2416449c2c",
"assets/assets/bottom/favourite_icon.png": "9a8253b75b9b3ea2b9ce15f392c75404",
"assets/assets/bottom/games_menu.png": "3c96c3005d5d4ce8ca26812d074a956f",
"assets/assets/bottom/group_134.png": "78a3728e8b15d59ebf7bc7da561c417f",
"assets/assets/bottom/group_135.png": "9ec0a8d0bfe0af1f1b252b6892a8f86a",
"assets/assets/bottom/hot_games_icon.png": "c3585a9f22914c88222ea832e10a5919",
"assets/assets/bottom/item_next.svg": "f8823d7cf920b445e73915cbfa78481f",
"assets/assets/bottom/item_prev.svg": "1c03c987cd9a25cabf8c36fc9d83b788",
"assets/assets/bottom/item_scroll_01.png": "157d35abea16f65b9a61b0c26d1da256",
"assets/assets/bottom/item_scroll_02.png": "ff061b5ca0f6807f884ed537cea30cd3",
"assets/assets/bottom/item_scroll_03.png": "c1e5d721af5dd2e982005e13c4f8c403",
"assets/assets/bottom/live_casino_icon.png": "d378693a084b8837d804a33cb64adc7e",
"assets/assets/bottom/next-orange.png": "ac91f0c1d9dffc32555a08877b7522b4",
"assets/assets/bottom/next5pg_grey.png": "bb4b5b6f2d28cfa87ccc7ccf51ca8f7e",
"assets/assets/bottom/next5pg_orange.png": "70c1e35ff3da3d24c4a0333738eefa9f",
"assets/assets/bottom/next_grey.png": "38cba22305f93157cb77f712da598183",
"assets/assets/bottom/other_rng_icon.png": "4bd62f3b0770e533ef2a8bf3c5c7ce47",
"assets/assets/bottom/previous_5pg_grey.png": "4eee545a69511fe62233e4930fd57888",
"assets/assets/bottom/previous_5pg_orange.png": "bf8d494bf8122b14b9aaad20b26e586a",
"assets/assets/bottom/previous_grey.png": "d90657942cf1bf9eb2437cc500acdaa9",
"assets/assets/bottom/previous_orange.png": "de12021a71276a65f480770c23d48dc5",
"assets/assets/bottom/rectangle_85.png": "0208b76cda43c1cd962f3309d76b2647",
"assets/assets/bottom/slots_icon.png": "3484cf46ed4651074de3abf73bcf8d6d",
"assets/assets/bottom/spaceman_icon.png": "fee551dd680342710f882213937f903f",
"assets/assets/bottom/virtual_sport_icon.png": "150261c8736b5c5c20497693d91c4124",
"assets/assets/font/Montserrat-Black.otf": "f86a4fdb233e1ca195b64712ac9c7cbe",
"assets/assets/font/Montserrat-Bold.otf": "5a6aef823dd8d1b22aacd78aebb653d6",
"assets/assets/font/Montserrat-ExtraBold.otf": "2bd71f20a86651553aae5d1e7d3383eb",
"assets/assets/font/Montserrat-Light.otf": "f5e955efb2bef154ac6dd150903f2d45",
"assets/assets/font/Montserrat-Regular.otf": "27e50ffd6a14cbc8221c9dbd3b5208dc",
"assets/assets/font/Montserrat-SemiBold.otf": "cbdf3ab950d15019fff93460614948b7",
"assets/assets/font/Montserrat-Thin.ttf": "9d9f03c034671acb26355acf621a46a8",
"assets/assets/font/Montserrat-UltraLight.otf": "816e4ead403eeba090d9a7c77c4ba9c2",
"assets/assets/game/30.jpg": "49c37d6f7b3e7ed5c5da4c12e66b000a",
"assets/assets/game/5-lions-gold.png": "d8ffac10fdcc08098b3b8445e5ffe6ed",
"assets/assets/game/artboard1.png": "e870e52d02cbae1fb68eb8ec0d2bc12b",
"assets/assets/game/background.png": "eb17b3131669b14cbebe98b62332eff7",
"assets/assets/game/basegame_bg.png": "2ba3ed147937b08bcbc12660e393f1bb",
"assets/assets/game/big_bass.jpg": "9aec947d622b0824629d6aaeaeb35a6b",
"assets/assets/game/exit_page.png": "8f59f0d844de31fdd1512faa937b063d",
"assets/assets/game/fav01.png": "5778ac532303a9bf057f04df249e6464",
"assets/assets/game/fav02.png": "b8b94b9d1f43cfc41681c4d3dec47a85",
"assets/assets/game/hot.png": "4d0ecc22009293ebe3dd52ad92c1c425",
"assets/assets/game/new.png": "51478117b11fb14c7f4525fcc597aaa3",
"assets/assets/game/notice_background.png": "f74e8804ad81e0a59c6cb57db30e9bf1",
"assets/assets/game/ok.png": "df6479db5e8aadbf82e8a9466db3b93b",
"assets/assets/game/quit.png": "892ad2881fdf0c28c6fa4ddd48d5384e",
"assets/assets/game/spaceman.jpg": "4894ef80856d5fa29ce3412ab1269897",
"assets/assets/history/back.png": "13b502bcadccd3e3486ccac1823778ab",
"assets/assets/history/game_history_grey.png": "4ade4d0a0decf577d063676d1c0bfe77",
"assets/assets/history/game_history_history.png": "75bc55c6726ec7d27ef396a50f119424",
"assets/assets/history/history_paragraph.png": "2381862bbdc2d1b4088dfc686c8ed925",
"assets/assets/history/wallet_history_grey.png": "9552d91fff45fecd935a6c71a0487524",
"assets/assets/history/wallet_history_orange.png": "656534baebc9443d42dcb2a547b7ce36",
"assets/assets/icon/icon.png": "a031b1745551a45a68aaa71b61aa7bc4",
"assets/assets/icon/icon_all_games.svg": "0de1434b03d45626537c3a9135b1515d",
"assets/assets/icon/icon_baccarat.svg": "3341c209d87d3bb1e3a5911979ea1e0c",
"assets/assets/icon/icon_back_to_game.svg": "9d4a5386c94c0ec0b054268765a3a380",
"assets/assets/icon/icon_blackjack.svg": "d3be20caadee1a358686f49656b9ae42",
"assets/assets/icon/icon_dragon_tiger.svg": "ebbac492f2c88b5de9f0cf1cc266ac6e",
"assets/assets/icon/icon_game_show.svg": "ea1e3bbfa5471196efdcc7f5ff61cabb",
"assets/assets/icon/icon_others.svg": "e0d317aafb9a55d5797919f67344fd7f",
"assets/assets/icon/icon_roulette.svg": "4e395adb0d3ff8326b5e9a05fbb73d07",
"assets/assets/icon/icon_sicbo.svg": "f376cffc177b8c6aae31377756edc130",
"assets/assets/icon/item_favourite_icon.png": "229644f9a6012f9f9ef6b3b3076bd889",
"assets/assets/icon/item_hot_icon.png": "a2650e059b616c9830c605bae73e2341",
"assets/assets/icon/item_maintanance.png": "c4eb0ca520271629277c7da0dece4279",
"assets/assets/icon/item_new_game_icon.png": "04202165eab6392826403738621b386f",
"assets/assets/icon/jackpot_in_game.png": "f87a0e8818e064c54cbf5f501d5757e2",
"assets/assets/icon/long_icon.png": "173ef656188620157912266d69d88d7f",
"assets/assets/icon/new_ppx_logo.png": "e1cd84c211ce7807188624b113f68365",
"assets/assets/icon/progressive_jackpot.png": "8eb2dcc6d903a4b0ee579be61c2ea94b",
"assets/assets/images/banner_giftbox.jpg": "ad3ababb2e6d1a5168fb26a9b2b575bc",
"assets/assets/images/big_win.png": "24705942b3abae9af61e5db81da78a98",
"assets/assets/images/bonus.jpg": "7402df167008c85e9d927704af156146",
"assets/assets/images/bottom_logo.png": "927fd1259c351a6f3604accde62ec4b1",
"assets/assets/images/claim_now.png": "840fe43ca689924fd968c008be5bca1b",
"assets/assets/images/cny_bg.png": "3c9f4baec9ef2f2378cda623a73e4e0c",
"assets/assets/images/cny_logo.png": "5733566a2be16becfb95f1e686b5c3dc",
"assets/assets/images/cny_tab.png": "6ceedb1f7f5d515c68d5870393320ca3",
"assets/assets/images/coin_splash.gif": "9e5d18d0f74aa2b7d5af27b456460307",
"assets/assets/images/colored_close_box.png": "aeb0546f2d28fa6b86f4f011a544ae22",
"assets/assets/images/confirm.png": "e38d6c0266dbb57b1f1c473038dcc3e3",
"assets/assets/images/default_image.jpg": "1c63944d0c52be87dff38d6094a3af84",
"assets/assets/images/driven_by_pp.png": "8ec51d02b5e2d598afcbd77d12298239",
"assets/assets/images/grey_close_box.png": "06e48419e47fb393084cc2e7190b685b",
"assets/assets/images/main_page_background.jpg": "af6421470c7968d670ff8855f8c2127d",
"assets/assets/images/main_page_hot_casino_banner.jpg": "30973ad4a53476e1a415eb28d7cefd93",
"assets/assets/images/main_page_hot_slots_game_banner.jpg": "991b38d043904a9215120fff85fcf465",
"assets/assets/images/multiplier_bonus.png": "e943d7b414221d43b82b463401f78563",
"assets/assets/images/normal_logo.png": "2ccaf669593ed8a53686c80b1c1b4e42",
"assets/assets/images/play_x_logo.png": "0daeee92aea9f8d72f4834fbb08bb184",
"assets/assets/images/raya_bg.jpg": "4be170dc40ed906cccc1074a39acc4e7",
"assets/assets/images/raya_tab.png": "56214e871f5124e3dd5a96dbbfa9bc22",
"assets/assets/images/rectangle_75.png": "47f63894943b0a64379825879626cc69",
"assets/assets/images/rectangle_76.png": "dc4d626f634cd6cd1f198a0eccde5914",
"assets/assets/images/xmas_bg.png": "c213610612a240469fc415a7ef0f12d8",
"assets/assets/images/xmas_logo.png": "ad2d84741a3a11b03019a05d1496d952",
"assets/assets/images/xmas_tab.png": "a6a9a37a484a764d594899f16d421476",
"assets/assets/jackpot/item_grand_jackpot.png": "8a59e19bc8bbb29b754f015902123de5",
"assets/assets/jackpot/item_mega_jackpot.png": "9c6789c8e9f55ceca297c262cacbf063",
"assets/assets/jackpot/item_mini_jackpot.png": "29795e9c0c3de51def952abcc726cfaa",
"assets/assets/live_casino/504x248.png": "b3f56786afd271a09c07e5f79747bdbc",
"assets/assets/live_casino/andar-bahar.png": "b2b7dba672844287e11da48307d9ffce",
"assets/assets/live_casino/auto-roulette-1.png": "da24b419e58e3c8ca534c6adddf79e0e",
"assets/assets/live_casino/boom-city.png": "a2a0ee86e609b977866708344853ffcc",
"assets/assets/live_casino/mega-sic-bo.png": "f9e5900debaa705fe952324d2371006a",
"assets/assets/live_casino/mega-wheel.png": "6277144743bc892b330358030e327d21",
"assets/assets/login/chi.png": "0367a56e83555678beb53bcae68276f6",
"assets/assets/login/en.png": "2b7463f7cade60d4fad44ebb7cdd8f3f",
"assets/assets/login/indo.png": "38ef30a3c1506221c975e3edb1236458",
"assets/assets/login/login.png": "2fc8ede5c9aeaeaf872fb3353a70bc76",
"assets/assets/login/login_box.png": "b691fa48c51c96144d7ff2b394965bf6",
"assets/assets/login/login_button.png": "1c1e397d666621c00c9a325a11063383",
"assets/assets/login/login_icon.svg": "a6a8f2289523edff9f84b03fb804eb3a",
"assets/assets/login/login_icon_pp.png": "3ef13ef03c6d494f7583a0a5a886292f",
"assets/assets/login/login_page_background.png": "008a819853b087af0520aac83fb86bb6",
"assets/assets/login/login_sound_off.png": "13e16977aacc0beb78ea62f778432529",
"assets/assets/login/login_sound_on.png": "9f22371ccaf13355ef9a74deb75120ac",
"assets/assets/login/logo.png": "7d7ab55b827742aae433e388baea55be",
"assets/assets/login/new_login_bg.jpg": "74b9e67baae78698dc4fda4ade66dcd6",
"assets/assets/login/play_x_final.png": "b3e9255291d7d1ef76ec2c93619502c8",
"assets/assets/login/ppx_logo.png": "b30658904d6301c1b26045ee280a4614",
"assets/assets/login/ppx_log_in_page.jpg": "47a587637043edf8f45ce6f25a62ebb9",
"assets/assets/login/pramatic_play_logo.png": "d6045cd6f6c6e83ad922c67c9b1f691e",
"assets/assets/login/remember_me_box.png": "fcb2d68676f1f7d2fd01b0d061dadc71",
"assets/assets/login/sound_icon_close.png": "fd6ef9789f9e3d949c9408ab869a17a2",
"assets/assets/login/sound_icon_open.png": "534f7bf852bd20f0012daf8c23ba5db7",
"assets/assets/login/zeus_logIn_2.png": "99acebd8eea3375644d8c214357de457",
"assets/assets/lottie_json/add_extra_time.json": "a6f92e9d6beed560ed890faa6c653ec6",
"assets/assets/lottie_json/announcement.json": "59708be968eec3a1ecefe99a54dd4599",
"assets/assets/lottie_json/big_win_empty.json": "688fbf825c5976c4dac9e7e05232c25b",
"assets/assets/lottie_json/big_win_spin.json": "d141976ca638584b0b8f7e897edf7934",
"assets/assets/lottie_json/big_win_spin2.json": "89f20731e6a061af3698214ced13d9c7",
"assets/assets/lottie_json/chat.json": "00cd787f17bf78ff7bbab1753d12d2b0",
"assets/assets/lottie_json/closed_gift_box.json": "2b18e8bfd7f5fb50f257d1983af0f385",
"assets/assets/lottie_json/done.json": "db59a3de106c3dcd5b8176887b3da2bb",
"assets/assets/lottie_json/error.json": "28b238d8b3a1c5b9c8fed1b20242bbf1",
"assets/assets/lottie_json/error2.json": "2f641d5bf1e1b35a6c6afa555c08faa3",
"assets/assets/lottie_json/favorite-star.json": "e3a2d6c1743dbb642576b528c620f908",
"assets/assets/lottie_json/feedback.json": "7f669703ce202f3429c6db116c7ab86b",
"assets/assets/lottie_json/info.json": "432362883d1e69e0ffd41ba0eb120057",
"assets/assets/lottie_json/loading.json": "36a93b65f49e2537d464ef8683bf2a60",
"assets/assets/lottie_json/loading_orange.json": "ebaeb2fff3d2d806e5ecce6211a2bfc7",
"assets/assets/lottie_json/loading_red.json": "ece40475b3dc8e558b45a54a2c93cb8f",
"assets/assets/lottie_json/love.json": "dbf16269ee0b86f8cb06bbe58b535eec",
"assets/assets/lottie_json/money.json": "197d9c5f8e0d8c7ad3e86a9fe4275bd8",
"assets/assets/lottie_json/open.json": "d58719b65a818268120a10e2147a9839",
"assets/assets/lottie_json/open_gift_box.json": "d1a8341c563f95170da1e38e629b0b19",
"assets/assets/lottie_json/payment.json": "053c9e108ae8963755ba9cf750096eea",
"assets/assets/lottie_json/popup.json": "83e8062aceae93bec4f14b07c2b99375",
"assets/assets/lottie_json/rainbow.json": "591f816ace2266d82be7fe3e12ceb07a",
"assets/assets/lottie_json/review.json": "d6eadd23fbf54b0d65cee2e73e791996",
"assets/assets/lottie_json/ribbon.json": "82c970708810631a58a912de6a9f0816",
"assets/assets/lottie_json/rocket.json": "2a6b3f32c29b05c30a3760a8b1eb1665",
"assets/assets/lottie_json/rose.json": "f2e29c593b7b33795ceb36025c485005",
"assets/assets/lottie_json/scale.json": "46a96b90541fd1dcffd1cadf07b99658",
"assets/assets/lottie_json/shake.json": "0129e5ab5bfc4e5467c21a00a8884609",
"assets/assets/lottie_json/shake_with_no_star.json": "11a6805b0eca6f4bddc556e181c3b6b7",
"assets/assets/lottie_json/shake_with_no_star_grey.json": "f56af2779ab08d01b74ef2578aa1ac7a",
"assets/assets/lottie_json/success.json": "4ac4d2f1fa99de356aee071e00f43cd0",
"assets/assets/lottie_json/success2.json": "b442727f0795fedffc818aa067726214",
"assets/assets/lottie_json/thank_you_small.json": "7d47798228f429a2bba4a1f501f68730",
"assets/assets/lottie_json/top_up.json": "f88b94f142411bfecbb4aa6f88bb1039",
"assets/assets/lottie_json/uploading.json": "8435865e10fde0e926ca2d49b10bba5a",
"assets/assets/lottie_json/verification_badge.json": "ed4559563add593fd4adaf621ef87a2d",
"assets/assets/lottie_json/white_searching.json": "7cb813a475e1e21ab8f21326c1922f50",
"assets/assets/password_change/cancel.png": "3ee058253ce30b0ea80b29535fc07c24",
"assets/assets/password_change/change_password.png": "665986abed530dd0e11fb25df472eab1",
"assets/assets/password_change/confirm.png": "e38d6c0266dbb57b1f1c473038dcc3e3",
"assets/assets/password_change/password_changed_popup.png": "a530f06094bf0e5772ebd0b07b8d6b52",
"assets/assets/password_change/password_change_box.png": "6753e6c9b3f9adbf126b03491e19d5f9",
"assets/assets/profile/change_password_buttom.png": "99213d4592ad952b190c3c9ec0de5b72",
"assets/assets/profile/close.svg": "c1efa35a018c4861c87682ffed1ba190",
"assets/assets/profile/history.png": "25e4f0bda47f19da2880af0c46702188",
"assets/assets/profile/profile.png": "12c62450b0fa277834a163a2c9455693",
"assets/assets/profile/profile_image.png": "029392f8e12925780c2e135592736935",
"assets/assets/side/main_page_item_04.png": "a572e8a0c3ed5bda023cfac48a0b250f",
"assets/assets/side/main_page_item_05.png": "3a35aaaf146b7c2da4e4c28661af935d",
"assets/assets/side/main_page_item_fav.svg": "9ecefd6151d78a0a2a67dea4040c047b",
"assets/assets/side/main_page_item_hot_games.svg": "fc0723e30d2ff92516ef3c56f9e3069f",
"assets/assets/side/main_page_item_jackpot.svg": "761ff1b99599403a5773b7869d52afc6",
"assets/assets/side/main_page_item_live_casino.svg": "c02e2a730b75fb4b44da1b483bed546d",
"assets/assets/side/main_page_item_rng.svg": "963c8fd78216d33e4c21a188c10ecebb",
"assets/assets/side/main_page_item_slot.svg": "8b04103468c0a5e10f0133e6cc642f25",
"assets/assets/side/main_page_item_spaceman.svg": "195f343eb547d064e800ecf9688dd9c0",
"assets/assets/side/main_page_item_sports.svg": "4100688b56ecf055b9a3c2842fff56f8",
"assets/assets/top/credit_box.png": "47619dbbd940aa48c0428e7080223226",
"assets/assets/top/dollar_icon.png": "94d23addac3571f4cce6f3154625d12a",
"assets/assets/top/group_119.png": "1c31d47b69d59da8a76a3a8d2e58f348",
"assets/assets/top/group_120.png": "cb91296cfd8d31bbff32b856c20c02ad",
"assets/assets/top/item_coin_icon.png": "a103eb5c771a36faeaa032d322942158",
"assets/assets/top/item_coin_icon.svg": "9487927c8bcb4bcf269b8fb7522e8e82",
"assets/assets/top/item_language_ch.png": "e1b33d9920681e22d12c439109e97c4b",
"assets/assets/top/item_language_cn.svg": "258e70a16a35de5c564925e8d46e9ae1",
"assets/assets/top/item_language_en.png": "7e16f223adbbbcf16edab59f9d59e20c",
"assets/assets/top/item_language_en.svg": "647305528807dfd4f7c1ff0d6484973f",
"assets/assets/top/item_language_in.png": "386f2f018e047a0177f7b94d7d61233a",
"assets/assets/top/item_language_in.svg": "def077eee349f96016a9fe5f295231c0",
"assets/assets/top/item_logout.svg": "f2412bbc2d347fa83ac08a2a193ebe43",
"assets/assets/top/item_report.png": "ddca5366ef2f329e5ac8ae57a7c2989c",
"assets/assets/top/item_report.svg": "dec6c3d15760d9c51ad37a91927d6dd8",
"assets/assets/top/item_sound_off.png": "e616385e20804b37bcebad9a51db6bf7",
"assets/assets/top/item_sound_off.svg": "2997c7c0b11f538956c1759e0addf35a",
"assets/assets/top/item_sound_on.png": "670de3e91956f9895dcf1e933ba8ea68",
"assets/assets/top/item_sound_on.svg": "de0ea7bf468f35a2e8152229b1074faa",
"assets/assets/top/language.png": "1969a000979bd9de53a087d1ceb1356a",
"assets/assets/top/log_out.png": "8f935f4e6b0029a4b61c065ff5cf3742",
"assets/assets/top/main_page_item_01.png": "67173f068e7be6c22a88f5f004aa50a7",
"assets/assets/top/main_page_item_02.png": "c93b8153b80f0b21401a98265a90f1bf",
"assets/assets/top/main_page_item_amount.png": "832b1ba6cec60a1f11cf43c46307d748",
"assets/assets/top/main_page_item_refresh.png": "44c97f9801df0579f4d6dc550296d1e9",
"assets/assets/top/main_page_item_user_name.png": "56f4f2975fc0dac77f09e8f2480272a8",
"assets/assets/top/menu.png": "d7364b627f46e9fea46bb9292c674fce",
"assets/assets/top/notice.png": "7624681dcd773af286896ce19e7ce3fe",
"assets/assets/top/play_x_final_1.png": "0daeee92aea9f8d72f4834fbb08bb184",
"assets/assets/top/profile_1.png": "1bdede84310acde3002e182e685c79f0",
"assets/assets/top/profile_icon.png": "7f5bebef5c3e49a0352fbb0c240e1e3f",
"assets/assets/top/rectangle_68.png": "8ce7c9079660ccb030c039e23eea5dbf",
"assets/assets/top/sound_off.png": "68e6975c4c46d5370fa344fc0ce84034",
"assets/assets/top/sound_on.png": "495f017e4e48269cc4e48745095036ac",
"assets/assets/top/username_box.png": "5b0f71734d4a9fcbff44466dbdf3da18",
"assets/assets/video/coin.mp4": "62cd7e9775016d5f387a2ca6609e8ecd",
"assets/assets/video/drop_win_feed_pop_up_banner_1000.mp4": "2c9004e99fcb4829b4943c626713ce6d",
"assets/FontManifest.json": "e74a4cea31bc36c4f0b03f518e7f6a74",
"assets/fonts/MaterialIcons-Regular.otf": "144bc32b452c87cdc973e9cea38c5f8d",
"assets/NOTICES": "ce2c9d9d78ca3de3f94e2554f52875df",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/sn_progress_dialog/images/cancel.png": "be94b63af32e39fabad56e2cab611b4b",
"assets/packages/sn_progress_dialog/images/completed.png": "4f4ec717f6bb773c80db76261bb367c3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf6f4b73e2f0a8cdc6a8009dccf192af",
"/": "bf6f4b73e2f0a8cdc6a8009dccf192af",
"main.dart.js": "cb07095669ac8441fabd593177828b81",
"manifest.json": "e36fc0b8a351900664ee03db9525178a",
"version.json": "b318c748ebbc7225df0619515bf58207"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
