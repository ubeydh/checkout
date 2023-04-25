import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { FaArrowRight, FaShip, FaCalendarAlt, FaUserAlt } from "react-icons/fa";

export default function CheckoutPage() {
  const router = useRouter();
  const {
    boatName,
    tourName,
    tourStartDate,
    tourEndDate,
    tourNights,
    tourID,
    tourURL,
  } = router.query;
  const stages = [
    "Select Suite",
    "Guest Details",
    "Extra Services",
    "Information",
  ];
  const [room, setRooms] = useState([]);
  const [currentStage, setCurrentStage] = useState(0);
  const [selectedRooms1, setSelectedRooms1] = useState(0);
  const [selectedRooms2, setSelectedRooms2] = useState(0);
  const [selectedRooms3, setSelectedRooms3] = useState(0);
  const [selectedOccupancy1, setSelectedOccupancy1] = useState("");
  const [selectedOccupancy2, setSelectedOccupancy2] = useState("");
  const [selectedOccupancy3, setSelectedOccupancy3] = useState("");
  const [selectedOccupancy4, setSelectedOccupancy4] = useState("");
  const [selectedOccupancy5, setSelectedOccupancy5] = useState("");
  const [selectedOccupancy6, setSelectedOccupancy6] = useState("");
  const [selectedOccupancy7, setSelectedOccupancy7] = useState("");
  const [selectedOccupancy8, setSelectedOccupancy8] = useState("");
  const [selectedOccupancy9, setSelectedOccupancy9] = useState("");
  const [selectedOccupancy10, setSelectedOccupancy10] = useState("");
  const [selectedOccupancy11, setSelectedOccupancy11] = useState("");
  const [selectedOccupancy12, setSelectedOccupancy12] = useState("");
  const [selectedOccupancy13, setSelectedOccupancy13] = useState("");
  const [selectedOccupancy14, setSelectedOccupancy14] = useState("");
  const [selectedOccupancy15, setSelectedOccupancy15] = useState("");
  const [selectedOccupancy16, setSelectedOccupancy16] = useState("");
  const [selectedOccupancy17, setSelectedOccupancy17] = useState("");
  const [selectedOccupancy18, setSelectedOccupancy18] = useState("");
  const [selectedOccupancy19, setSelectedOccupancy19] = useState("");
  const [selectedOccupancy20, setSelectedOccupancy20] = useState("");
  const [selectedOccupancy21, setSelectedOccupancy21] = useState("");
  const [selectedOccupancy22, setSelectedOccupancy22] = useState("");
  const [selectedOccupancy23, setSelectedOccupancy23] = useState("");
  const [selectedOccupancy24, setSelectedOccupancy24] = useState("");
  const [selectedOccupancy25, setSelectedOccupancy25] = useState("");
  const [selectedOccupancy26, setSelectedOccupancy26] = useState("");
  const [selectedOccupancy27, setSelectedOccupancy27] = useState("");
  const [selectedOccupancy28, setSelectedOccupancy28] = useState("");
  const [selectedOccupancy29, setSelectedOccupancy29] = useState("");
  const [selectedOccupancy30, setSelectedOccupancy30] = useState("");
  const [selectedOccupancy31, setSelectedOccupancy31] = useState("");
  const [selectedOccupancy32, setSelectedOccupancy32] = useState("");
  const [selectedOccupancy33, setSelectedOccupancy33] = useState("");
  const [selectedOccupancy34, setSelectedOccupancy34] = useState("");
  const [selectedOccupancy35, setSelectedOccupancy35] = useState("");
  const [selectedOccupancy36, setSelectedOccupancy36] = useState("");
  const [selectedOccupancy37, setSelectedOccupancy37] = useState("");
  const [selectedOccupancy38, setSelectedOccupancy38] = useState("");
  const [selectedOccupancy39, setSelectedOccupancy39] = useState("");
  const [selectedOccupancy40, setSelectedOccupancy40] = useState("");
  const [selectedOccupancy41, setSelectedOccupancy41] = useState("");
  const [selectedOccupancy42, setSelectedOccupancy42] = useState("");
  const [selectedOccupancy43, setSelectedOccupancy43] = useState("");
  const [selectedOccupancy44, setSelectedOccupancy44] = useState("");
  const [selectedOccupancy45, setSelectedOccupancy45] = useState("");
  const [selectedOccupancy46, setSelectedOccupancy46] = useState("");
  const [selectedOccupancy47, setSelectedOccupancy47] = useState("");
  const [selectedOccupancy48, setSelectedOccupancy48] = useState("");
  const [selectedOccupancy49, setSelectedOccupancy49] = useState("");
  const [selectedOccupancy50, setSelectedOccupancy50] = useState("");
  const [selectedOccupancy51, setSelectedOccupancy51] = useState("");
  const [selectedOccupancy52, setSelectedOccupancy52] = useState("");
  const [selectedOccupancy53, setSelectedOccupancy53] = useState("");
  const [selectedOccupancy54, setSelectedOccupancy54] = useState("");
  const [selectedOccupancy55, setSelectedOccupancy55] = useState("");
  const [selectedOccupancy56, setSelectedOccupancy56] = useState("");
  const [selectedOccupancy57, setSelectedOccupancy57] = useState("");
  const [selectedOccupancy58, setSelectedOccupancy58] = useState("");
  const [selectedOccupancy59, setSelectedOccupancy59] = useState("");
  const [selectedOccupancy60, setSelectedOccupancy60] = useState("");
  const [selectedOccupancy61, setSelectedOccupancy61] = useState("");
  const [selectedOccupancy62, setSelectedOccupancy62] = useState("");
  const [selectedOccupancy63, setSelectedOccupancy63] = useState("");
  const [selectedOccupancy64, setSelectedOccupancy64] = useState("");
  const [selectedOccupancy65, setSelectedOccupancy65] = useState("");
  const [selectedOccupancy66, setSelectedOccupancy66] = useState("");
  const [selectedOccupancy67, setSelectedOccupancy67] = useState("");
  const [selectedOccupancy68, setSelectedOccupancy68] = useState("");
  const [selectedOccupancy69, setSelectedOccupancy69] = useState("");
  const [selectedOccupancy70, setSelectedOccupancy70] = useState("");
  const [selectedOccupancy71, setSelectedOccupancy71] = useState("");
  const [selectedOccupancy72, setSelectedOccupancy72] = useState("");
  const [selectedOccupancy73, setSelectedOccupancy73] = useState("");
  const [selectedOccupancy74, setSelectedOccupancy74] = useState("");
  const [selectedOccupancy75, setSelectedOccupancy75] = useState("");
  const [selectedOccupancy76, setSelectedOccupancy76] = useState("");
  const [selectedOccupancy77, setSelectedOccupancy77] = useState("");
  const [selectedOccupancy78, setSelectedOccupancy78] = useState("");
  const [selectedOccupancy79, setSelectedOccupancy79] = useState("");
  const [selectedOccupancy80, setSelectedOccupancy80] = useState("");
  const [selectedOccupancy81, setSelectedOccupancy81] = useState("");
  const [selectedOccupancy82, setSelectedOccupancy82] = useState("");
  const [selectedOccupancy83, setSelectedOccupancy83] = useState("");
  const [selectedOccupancy84, setSelectedOccupancy84] = useState("");
  const [selectedOccupancy85, setSelectedOccupancy85] = useState("");
  const [selectedOccupancy86, setSelectedOccupancy86] = useState("");
  const [selectedOccupancy87, setSelectedOccupancy87] = useState("");
  const [selectedOccupancy88, setSelectedOccupancy88] = useState("");
  const [selectedOccupancy89, setSelectedOccupancy89] = useState("");
  const [selectedOccupancy90, setSelectedOccupancy90] = useState("");
  const [selectedOccupancy91, setSelectedOccupancy91] = useState("");
  const [selectedOccupancy92, setSelectedOccupancy92] = useState("");
  const [selectedOccupancy93, setSelectedOccupancy93] = useState("");
  const [selectedOccupancy94, setSelectedOccupancy94] = useState("");
  const [selectedOccupancy95, setSelectedOccupancy95] = useState("");
  const [selectedOccupancy96, setSelectedOccupancy96] = useState("");
  const [selectedOccupancy97, setSelectedOccupancy97] = useState("");
  const [selectedOccupancy98, setSelectedOccupancy98] = useState("");
  const [selectedOccupancy99, setSelectedOccupancy99] = useState("");
  const [selectedOccupancy100, setSelectedOccupancy100] = useState("");
  const [selectedOccupancy101, setSelectedOccupancy101] = useState("");
  const [selectedOccupancy102, setSelectedOccupancy102] = useState("");
  const [selectedOccupancy103, setSelectedOccupancy103] = useState("");
  const [selectedOccupancy104, setSelectedOccupancy104] = useState("");
  const [selectedOccupancy105, setSelectedOccupancy105] = useState("");
  const [selectedOccupancy106, setSelectedOccupancy106] = useState("");
  const [selectedOccupancy107, setSelectedOccupancy107] = useState("");
  const [selectedOccupancy108, setSelectedOccupancy108] = useState("");
  const [guestName1, setGuestName1] = useState("");
  const [guestName2, setGuestName2] = useState("");
  const [guestName3, setGuestName3] = useState("");
  const [guestName4, setGuestName4] = useState("");
  const [guestName5, setGuestName5] = useState("");
  const [guestName6, setGuestName6] = useState("");
  const [guestName7, setGuestName7] = useState("");
  const [guestName8, setGuestName8] = useState("");
  const [guestName9, setGuestName9] = useState("");
  const [guestName10, setGuestName10] = useState("");
  const [guestName11, setGuestName11] = useState("");
  const [guestName12, setGuestName12] = useState("");
  const [guestName13, setGuestName13] = useState("");
  const [guestName14, setGuestName14] = useState("");
  const [guestName15, setGuestName15] = useState("");
  const [guestName16, setGuestName16] = useState("");
  const [guestName17, setGuestName17] = useState("");
  const [guestName18, setGuestName18] = useState("");
  const [guestName19, setGuestName19] = useState("");
  const [guestName20, setGuestName20] = useState("");
  const [guestName22, setGuestName22] = useState("");
  const [guestName23, setGuestName23] = useState("");
  const [guestName24, setGuestName24] = useState("");
  const [guestName25, setGuestName25] = useState("");
  const [guestName26, setGuestName26] = useState("");
  const [guestName27, setGuestName27] = useState("");
  const [guestName28, setGuestName28] = useState("");
  const [guestName29, setGuestName29] = useState("");
  const [guestName30, setGuestName30] = useState("");
  const [guestName31, setGuestName31] = useState("");
  const [guestName32, setGuestName32] = useState("");
  const [guestName33, setGuestName33] = useState("");
  const [guestName34, setGuestName34] = useState("");
  const [guestName35, setGuestName35] = useState("");
  const [guestName36, setGuestName36] = useState("");
  const [guestName37, setGuestName37] = useState("");
  const [guestName38, setGuestName38] = useState("");
  const [guestName39, setGuestName39] = useState("");
  const [guestName40, setGuestName40] = useState("");
  const [guestName41, setGuestName41] = useState("");
  const [guestName42, setGuestName42] = useState("");
  const [guestName43, setGuestName43] = useState("");
  const [guestName44, setGuestName44] = useState("");
  const [guestName45, setGuestName45] = useState("");
  const [guestName46, setGuestName46] = useState("");
  const [guestName47, setGuestName47] = useState("");
  const [guestName48, setGuestName48] = useState("");
  const [guestName49, setGuestName49] = useState("");
  const [guestName50, setGuestName50] = useState("");
  const [guestName51, setGuestName51] = useState("");
  const [guestName52, setGuestName52] = useState("");
  const [guestName53, setGuestName53] = useState("");
  const [guestName54, setGuestName54] = useState("");
  const [guestName55, setGuestName55] = useState("");
  const [guestName56, setGuestName56] = useState("");
  const [guestName57, setGuestName57] = useState("");
  const [guestName58, setGuestName58] = useState("");
  const [guestName59, setGuestName59] = useState("");
  const [guestName60, setGuestName60] = useState("");
  const [guestName61, setGuestName61] = useState("");
  const [guestName62, setGuestName62] = useState("");
  const [guestName63, setGuestName63] = useState("");
  const [guestName64, setGuestName64] = useState("");
  const [guestName65, setGuestName65] = useState("");
  const [guestName66, setGuestName66] = useState("");
  const [guestName67, setGuestName67] = useState("");
  const [guestName68, setGuestName68] = useState("");
  const [guestName69, setGuestName69] = useState("");
  const [guestName70, setGuestName70] = useState("");
  const [guestName71, setGuestName71] = useState("");
  const [guestName72, setGuestName72] = useState("");
  const [guestName73, setGuestName73] = useState("");
  const [guestName74, setGuestName74] = useState("");
  const [guestName75, setGuestName75] = useState("");
  const [guestName76, setGuestName76] = useState("");
  const [guestName77, setGuestName77] = useState("");
  const [guestName78, setGuestName78] = useState("");
  const [guestName79, setGuestName79] = useState("");
  const [guestName80, setGuestName80] = useState("");
  const [guestName81, setGuestName81] = useState("");
  const [guestName82, setGuestName82] = useState("");
  const [guestName83, setGuestName83] = useState("");
  const [guestName84, setGuestName84] = useState("");
  const [guestName85, setGuestName85] = useState("");
  const [guestName86, setGuestName86] = useState("");
  const [guestName87, setGuestName87] = useState("");
  const [guestName88, setGuestName88] = useState("");
  const [guestName89, setGuestName89] = useState("");
  const [guestName90, setGuestName90] = useState("");
  const [guestName91, setGuestName91] = useState("");
  const [guestName92, setGuestName92] = useState("");
  const [guestName93, setGuestName93] = useState("");
  const [guestName94, setGuestName94] = useState("");
  const [guestName95, setGuestName95] = useState("");
  const [guestName96, setGuestName96] = useState("");
  const [guestName97, setGuestName97] = useState("");
  const [guestName98, setGuestName98] = useState("");
  const [guestName99, setGuestName99] = useState("");
  const [guestName100, setGuestName100] = useState("");
  const [guestName101, setGuestName101] = useState("");
  const [guestName102, setGuestName102] = useState("");
  const [guestName103, setGuestName103] = useState("");
  const [guestName104, setGuestName104] = useState("");
  const [guestName105, setGuestName105] = useState("");
  const [guestName106, setGuestName106] = useState("");
  const [guestName107, setGuestName107] = useState("");
  const [guestName108, setGuestName108] = useState("");
  const [guestName109, setGuestName109] = useState("");
  const [guestName110, setGuestName110] = useState("");
  const [guestName111, setGuestName111] = useState("");
  const [guestName112, setGuestName112] = useState("");
  const [guestName113, setGuestName113] = useState("");
  const [guestName114, setGuestName114] = useState("");
  const [guestName115, setGuestName115] = useState("");
  const [guestName116, setGuestName116] = useState("");
  const [guestName117, setGuestName117] = useState("");
  const [guestName118, setGuestName118] = useState("");
  const [guestName119, setGuestName119] = useState("");
  const [guestName120, setGuestName120] = useState("");
  const [guestName121, setGuestName121] = useState("");
  const [guestName122, setGuestName122] = useState("");
  const [guestName123, setGuestName123] = useState("");
  const [guestName124, setGuestName124] = useState("");
  const [guestName125, setGuestName125] = useState("");
  const [guestName126, setGuestName126] = useState("");
  const [guestName127, setGuestName127] = useState("");
  const [guestName128, setGuestName128] = useState("");
  const [guestName129, setGuestName129] = useState("");
  const [guestName130, setGuestName130] = useState("");
  const [guestName131, setGuestName131] = useState("");
  const [guestName132, setGuestName132] = useState("");
  const [guestName133, setGuestName133] = useState("");
  const [guestName134, setGuestName134] = useState("");
  const [guestName135, setGuestName135] = useState("");
  const [guestName136, setGuestName136] = useState("");
  const [guestName137, setGuestName137] = useState("");
  const [guestName138, setGuestName138] = useState("");
  const [guestName139, setGuestName139] = useState("");
  const [guestName140, setGuestName140] = useState("");
  const [guestName141, setGuestName141] = useState("");
  const [guestName142, setGuestName142] = useState("");
  const [guestName143, setGuestName143] = useState("");
  const [guestName144, setGuestName144] = useState("");
  const [guestName145, setGuestName145] = useState("");
  const [guestName146, setGuestName146] = useState("");
  const [guestName147, setGuestName147] = useState("");
  const [guestName148, setGuestName148] = useState("");
  const [guestName149, setGuestName149] = useState("");
  const [guestName150, setGuestName150] = useState("");
  const [guestName151, setGuestName151] = useState("");
  const [guestName152, setGuestName152] = useState("");
  const [guestName153, setGuestName153] = useState("");
  const [guestName154, setGuestName154] = useState("");
  const [guestName155, setGuestName155] = useState("");
  const [guestName156, setGuestName156] = useState("");
  const [guestName157, setGuestName157] = useState("");
  const [guestName158, setGuestName158] = useState("");
  const [guestName159, setGuestName159] = useState("");
  const [guestName160, setGuestName160] = useState("");
  const [guestName161, setGuestName161] = useState("");
  const [guestName162, setGuestName162] = useState("");
  const [guestName163, setGuestName163] = useState("");
  const [guestName164, setGuestName164] = useState("");
  const [guestName165, setGuestName165] = useState("");
  const [guestName166, setGuestName166] = useState("");
  const [guestName168, setGuestName168] = useState("");
  const [guestName169, setGuestName169] = useState("");
  const [guestName170, setGuestName170] = useState("");
  const [guestName171, setGuestName171] = useState("");
  const [guestName172, setGuestName172] = useState("");
  const [guestName173, setGuestName173] = useState("");
  const [guestName174, setGuestName174] = useState("");
  const [guestName175, setGuestName175] = useState("");
  const [guestName176, setGuestName176] = useState("");
  const [guestName177, setGuestName177] = useState("");
  const [guestName178, setGuestName178] = useState("");
  const [guestName179, setGuestName179] = useState("");
  const [guestName181, setGuestName181] = useState("");
  const [guestName182, setGuestName182] = useState("");
  const [guestName183, setGuestName183] = useState("");
  const [guestName184, setGuestName184] = useState("");
  const [guestName185, setGuestName185] = useState("");
  const [guestName186, setGuestName186] = useState("");
  const [guestName187, setGuestName187] = useState("");
  const [guestName188, setGuestName188] = useState("");
  const [guestName189, setGuestName189] = useState("");
  const [guestName190, setGuestName190] = useState("");
  const [guestName191, setGuestName191] = useState("");
  const [guestName192, setGuestName192] = useState("");
  const [guestName193, setGuestName193] = useState("");
  const [guestName194, setGuestName194] = useState("");
  const [guestName195, setGuestName195] = useState("");
  const [guestName196, setGuestName196] = useState("");
  const [guestName197, setGuestName197] = useState("");
  const [guestName198, setGuestName198] = useState("");
  const [guestName199, setGuestName199] = useState("");
  const [guestName200, setGuestName200] = useState("");
  const [guestName201, setGuestName201] = useState("");
  const [guestName202, setGuestName202] = useState("");
  const [guestName203, setGuestName203] = useState("");
  const [guestName204, setGuestName204] = useState("");
  const [guestName205, setGuestName205] = useState("");
  const [guestName206, setGuestName206] = useState("");
  const [guestName207, setGuestName207] = useState("");
  const [guestName208, setGuestName208] = useState("");
  const [guestName209, setGuestName209] = useState("");
  const [guestName210, setGuestName210] = useState("");
  const [guestName211, setGuestName211] = useState("");
  const [guestName212, setGuestName212] = useState("");
  const [guestName213, setGuestName213] = useState("");
  const [guestName214, setGuestName214] = useState("");
  const [guestName215, setGuestName215] = useState("");
  const [guestName216, setGuestName216] = useState("");
  const [guestName217, setGuestName217] = useState("");
  const [guestName218, setGuestName218] = useState("");
  const [guestName219, setGuestName219] = useState("");
  const [guestName220, setGuestName220] = useState("");
  const [guestName221, setGuestName221] = useState("");
  const [guestName222, setGuestName222] = useState("");
  const [guestName223, setGuestName223] = useState("");
  const [guestName224, setGuestName224] = useState("");
  const [guestName225, setGuestName225] = useState("");
  const [guestName226, setGuestName226] = useState("");
  const [guestName227, setGuestName227] = useState("");
  const [guestName228, setGuestName228] = useState("");
  const [guestName229, setGuestName229] = useState("");
  const [guestName230, setGuestName230] = useState("");
  const [guestName231, setGuestName231] = useState("");
  const [guestName232, setGuestName232] = useState("");
  const [guestName233, setGuestName233] = useState("");
  const [guestName234, setGuestName234] = useState("");
  const [guestName235, setGuestName235] = useState("");
  const [guestName236, setGuestName236] = useState("");
  const [guestName237, setGuestName237] = useState("");
  const [guestName238, setGuestName238] = useState("");
  const [guestName239, setGuestName239] = useState("");
  const [guestName240, setGuestName240] = useState("");
  const [guestName241, setGuestName241] = useState("");
  const [guestName242, setGuestName242] = useState("");
  const [guestName243, setGuestName243] = useState("");
  const [guestName244, setGuestName244] = useState("");
  const [guestName245, setGuestName245] = useState("");
  const [guestName246, setGuestName246] = useState("");
  const [guestName247, setGuestName247] = useState("");
  const [guestName248, setGuestName248] = useState("");
  const [guestName249, setGuestName249] = useState("");
  const [guestName250, setGuestName250] = useState("");
  const [guestName251, setGuestName251] = useState("");
  const [guestName252, setGuestName252] = useState("");
  const [guestName253, setGuestName253] = useState("");
  const [guestName254, setGuestName254] = useState("");
  const [guestName255, setGuestName255] = useState("");
  const [guestName256, setGuestName256] = useState("");
  const [guestName257, setGuestName257] = useState("");
  const [guestName258, setGuestName258] = useState("");
  const [guestName259, setGuestName259] = useState("");
  const [guestName260, setGuestName260] = useState("");
  const [guestName261, setGuestName261] = useState("");
  const [guestName262, setGuestName262] = useState("");
  const [guestName263, setGuestName263] = useState("");
  const [guestName264, setGuestName264] = useState("");
  const [guestName265, setGuestName265] = useState("");
  const [guestName266, setGuestName266] = useState("");
  const [guestName267, setGuestName267] = useState("");
  const [guestName268, setGuestName268] = useState("");
  const [guestName269, setGuestName269] = useState("");
  const [guestName270, setGuestName270] = useState("");
  const [guestName271, setGuestName271] = useState("");
  const [guestName272, setGuestName272] = useState("");
  const [guestName273, setGuestName273] = useState("");
  const [guestName274, setGuestName274] = useState("");
  const [guestName275, setGuestName275] = useState("");
  const [guestName276, setGuestName276] = useState("");
  const [guestName278, setGuestName278] = useState("");
  const [guestName279, setGuestName279] = useState("");
  const [guestName280, setGuestName280] = useState("");
  const [guestName281, setGuestName281] = useState("");
  const [guestName282, setGuestName282] = useState("");
  const [guestName283, setGuestName283] = useState("");
  const [guestName284, setGuestName284] = useState("");
  const [guestName285, setGuestName285] = useState("");
  const [guestName286, setGuestName286] = useState("");
  const [guestName287, setGuestName287] = useState("");
  const [guestName288, setGuestName288] = useState("");
  const [guestName289, setGuestName289] = useState("");
  const [guestName291, setGuestName291] = useState("");
  const [guestName292, setGuestName292] = useState("");
  const [guestName293, setGuestName293] = useState("");
  const [guestName294, setGuestName294] = useState("");
  const [guestName295, setGuestName295] = useState("");
  const [guestName296, setGuestName296] = useState("");
  const [guestName297, setGuestName297] = useState("");
  const [guestName298, setGuestName298] = useState("");
  const [guestName299, setGuestName299] = useState("");
  const [guestName300, setGuestName300] = useState("");
  const [guestName301, setGuestName301] = useState("");
  const [guestName302, setGuestName302] = useState("");
  const [guestName303, setGuestName303] = useState("");
  const [guestName304, setGuestName304] = useState("");
  const [guestName305, setGuestName305] = useState("");
  const [guestName306, setGuestName306] = useState("");
  const [guestName307, setGuestName307] = useState("");
  const [guestName308, setGuestName308] = useState("");
  const [guestName309, setGuestName309] = useState("");
  const [guestName310, setGuestName310] = useState("");
  const [guestName311, setGuestName311] = useState("");
  const [guestName312, setGuestName312] = useState("");
  const [guestName313, setGuestName313] = useState("");
  const [guestName314, setGuestName314] = useState("");
  const [guestName315, setGuestName315] = useState("");
  const [guestName316, setGuestName316] = useState("");
  const [guestName317, setGuestName317] = useState("");
  const [guestName318, setGuestName318] = useState("");
  const [guestName319, setGuestName319] = useState("");
  const [guestName320, setGuestName320] = useState("");
  const [guestName321, setGuestName321] = useState("");
  const [guestName322, setGuestName322] = useState("");
  const [guestName323, setGuestName323] = useState("");
  const [guestName324, setGuestName324] = useState("");
  const [guestName325, setGuestName325] = useState("");
  const [guestName326, setGuestName326] = useState("");
  const [guestName327, setGuestName327] = useState("");
  const [guestName328, setGuestName328] = useState("");
  const [guestName329, setGuestName329] = useState("");
  const [priceRoom1, setPriceRoom1] = useState(0);
  const [priceRoom2, setPriceRoom2] = useState(0);
  const [priceRoom3, setPriceRoom3] = useState(0);
  const [priceRoom4, setPriceRoom4] = useState(0);
  const [priceRoom5, setPriceRoom5] = useState(0);
  const [priceRoom6, setPriceRoom6] = useState(0);
  const [priceRoom7, setPriceRoom7] = useState(0);
  const [priceRoom8, setPriceRoom8] = useState(0);
  const [priceRoom9, setPriceRoom9] = useState(0);
  const [priceRoom10, setPriceRoom10] = useState(0);
  const [priceRoom11, setPriceRoom11] = useState(0);
  const [priceRoom12, setPriceRoom12] = useState(0);
  const [priceRoom13, setPriceRoom13] = useState(0);
  const [priceRoom14, setPriceRoom14] = useState(0);
  const [priceRoom15, setPriceRoom15] = useState(0);
  const [priceRoom16, setPriceRoom16] = useState(0);
  const [priceRoom17, setPriceRoom17] = useState(0);
  const [priceRoom18, setPriceRoom18] = useState(0);
  const [priceRoom19, setPriceRoom19] = useState(0);
  const [priceRoom20, setPriceRoom20] = useState(0);
  const [priceRoom21, setPriceRoom21] = useState(0);
  const [priceRoom22, setPriceRoom22] = useState(0);
  const [priceRoom23, setPriceRoom23] = useState(0);
  const [priceRoom24, setPriceRoom24] = useState(0);
  const [priceRoom25, setPriceRoom25] = useState(0);
  const [priceRoom26, setPriceRoom26] = useState(0);
  const [priceRoom27, setPriceRoom27] = useState(0);
  const [priceRoom28, setPriceRoom28] = useState(0);
  const [priceRoom29, setPriceRoom29] = useState(0);
  const [priceRoom30, setPriceRoom30] = useState(0);
  const [priceRoom31, setPriceRoom31] = useState(0);
  const [priceRoom32, setPriceRoom32] = useState(0);
  const [priceRoom33, setPriceRoom33] = useState(0);
  const [priceRoom34, setPriceRoom34] = useState(0);
  const [priceRoom35, setPriceRoom35] = useState(0);
  const [priceRoom36, setPriceRoom36] = useState(0);
  const [priceRoom37, setPriceRoom37] = useState(0);
  const [priceRoom38, setPriceRoom38] = useState(0);
  const [priceRoom39, setPriceRoom39] = useState(0);
  const [priceRoom40, setPriceRoom40] = useState(0);
  const [priceRoom41, setPriceRoom41] = useState(0);
  const [priceRoom42, setPriceRoom42] = useState(0);
  const [priceRoom43, setPriceRoom43] = useState(0);
  const [priceRoom44, setPriceRoom44] = useState(0);
  const [priceRoom45, setPriceRoom45] = useState(0);
  const [priceRoom46, setPriceRoom46] = useState(0);
  const [priceRoom47, setPriceRoom47] = useState(0);
  const [priceRoom48, setPriceRoom48] = useState(0);
  const [priceRoom49, setPriceRoom49] = useState(0);
  const [priceRoom50, setPriceRoom50] = useState(0);
  const [priceRoom51, setPriceRoom51] = useState(0);
  const [priceRoom52, setPriceRoom52] = useState(0);
  const [priceRoom53, setPriceRoom53] = useState(0);
  const [priceRoom54, setPriceRoom54] = useState(0);
  const [priceRoom55, setPriceRoom55] = useState(0);
  const [priceRoom56, setPriceRoom56] = useState(0);
  const [priceRoom57, setPriceRoom57] = useState(0);
  const [priceRoom58, setPriceRoom58] = useState(0);
  const [priceRoom59, setPriceRoom59] = useState(0);
  const [priceRoom60, setPriceRoom60] = useState(0);
  const [priceRoom61, setPriceRoom61] = useState(0);
  const [priceRoom62, setPriceRoom62] = useState(0);
  const [priceRoom63, setPriceRoom63] = useState(0);
  const [priceRoom64, setPriceRoom64] = useState(0);
  const [priceRoom65, setPriceRoom65] = useState(0);
  const [priceRoom66, setPriceRoom66] = useState(0);
  const [priceRoom67, setPriceRoom67] = useState(0);
  const [priceRoom68, setPriceRoom68] = useState(0);
  const [priceRoom69, setPriceRoom69] = useState(0);
  const [priceRoom70, setPriceRoom70] = useState(0);
  const [priceRoom71, setPriceRoom71] = useState(0);
  const [priceRoom72, setPriceRoom72] = useState(0);
  const [priceRoom73, setPriceRoom73] = useState(0);
  const [priceRoom74, setPriceRoom74] = useState(0);
  const [priceRoom75, setPriceRoom75] = useState(0);
  const [priceRoom76, setPriceRoom76] = useState(0);
  const [priceRoom77, setPriceRoom77] = useState(0);
  const [priceRoom78, setPriceRoom78] = useState(0);
  const [priceRoom79, setPriceRoom79] = useState(0);
  const [priceRoom80, setPriceRoom80] = useState(0);
  const [priceRoom81, setPriceRoom81] = useState(0);
  const [priceRoom82, setPriceRoom82] = useState(0);
  const [priceRoom83, setPriceRoom83] = useState(0);
  const [priceRoom84, setPriceRoom84] = useState(0);
  const [priceRoom85, setPriceRoom85] = useState(0);
  const [priceRoom86, setPriceRoom86] = useState(0);
  const [priceRoom87, setPriceRoom87] = useState(0);
  const [priceRoom88, setPriceRoom88] = useState(0);
  const [priceRoom89, setPriceRoom89] = useState(0);
  const [priceRoom90, setPriceRoom90] = useState(0);
  const [priceRoom91, setPriceRoom91] = useState(0);
  const [priceRoom92, setPriceRoom92] = useState(0);
  const [priceRoom93, setPriceRoom93] = useState(0);
  const [priceRoom94, setPriceRoom94] = useState(0);
  const [priceRoom95, setPriceRoom95] = useState(0);
  const [priceRoom96, setPriceRoom96] = useState(0);
  const [priceRoom97, setPriceRoom97] = useState(0);
  const [priceRoom98, setPriceRoom98] = useState(0);
  const [priceRoom99, setPriceRoom99] = useState(0);
  const [priceRoom100, setPriceRoom100] = useState(0);
  const [priceRoom101, setPriceRoom101] = useState(0);
  const [priceRoom102, setPriceRoom102] = useState(0);
  const [priceRoom103, setPriceRoom103] = useState(0);
  const [priceRoom104, setPriceRoom104] = useState(0);
  const [priceRoom105, setPriceRoom105] = useState(0);
  const [priceRoom106, setPriceRoom106] = useState(0);
  const [priceRoom107, setPriceRoom107] = useState(0);
  const [priceRoom108, setPriceRoom108] = useState(0);
  const [guestNamesCount, setGuestNamesCount] = useState(0);

  const handleGuestNameChange1 = (e) => {
    setGuestName1(e.target.value);
  };
  const handleGuestNameChange2 = (e) => {
    setGuestName2(e.target.value);
  };
  const handleGuestNameChange3 = (e) => {
    setGuestName3(e.target.value);
  };
  const handleGuestNameChange4 = (e) => {
    setGuestName4(e.target.value);
  };
  const handleGuestNameChange5 = (e) => {
    setGuestName5(e.target.value);
  };
  const handleGuestNameChange6 = (e) => {
    setGuestName6(e.target.value);
  };
  const handleGuestNameChange7 = (e) => {
    setGuestName7(e.target.value);
  };
  const handleGuestNameChange8 = (e) => {
    setGuestName8(e.target.value);
  };
  const handleGuestNameChange9 = (e) => {
    setGuestName9(e.target.value);
  };
  const handleGuestNameChange10 = (e) => {
    setGuestName10(e.target.value);
  };
  const handleGuestNameChange11 = (e) => {
    setGuestName11(e.target.value);
  };
  const handleGuestNameChange12 = (e) => {
    setGuestName12(e.target.value);
  };
  const handleGuestNameChange13 = (e) => {
    setGuestName13(e.target.value);
  };

  const handleGuestNameChange14 = (e) => {
    setGuestName14(e.target.value);
  };
  const handleGuestNameChange15 = (e) => {
    setGuestName15(e.target.value);
  };
  const handleGuestNameChange16 = (e) => {
    setGuestName16(e.target.value);
  };
  const handleGuestNameChange17 = (e) => {
    setGuestName17(e.target.value);
  };
  const handleGuestNameChange18 = (e) => {
    setGuestName18(e.target.value);
  };
  const handleGuestNameChange19 = (e) => {
    setGuestName19(e.target.value);
  };
  const handleGuestNameChange20 = (e) => {
    setGuestName20(e.target.value);
  };
  const handleGuestNameChange21 = (e) => {
    setGuestName21(e.target.value);
  };
  const handleGuestNameChange22 = (e) => {
    setGuestName22(e.target.value);
  };
  const handleGuestNameChange23 = (e) => {
    setGuestName23(e.target.value);
  };
  const handleGuestNameChange24 = (e) => {
    setGuestName24(e.target.value);
  };
  const handleGuestNameChange25 = (e) => {
    setGuestName25(e.target.value);
  };
  const handleGuestNameChange26 = (e) => {
    setGuestName26(e.target.value);
  };
  const handleGuestNameChange27 = (e) => {
    setGuestName27(e.target.value);
  };
  const handleGuestNameChange28 = (e) => {
    setGuestName28(e.target.value);
  };
  const handleGuestNameChange29 = (e) => {
    setGuestName29(e.target.value);
  };
  const handleGuestNameChange30 = (e) => {
    setGuestName30(e.target.value);
  };
  const handleGuestNameChange31 = (e) => {
    setGuestName31(e.target.value);
  };
  const handleGuestNameChange32 = (e) => {
    setGuestName32(e.target.value);
  };
  const handleGuestNameChange33 = (e) => {
    setGuestName33(e.target.value);
  };
  const handleGuestNameChange34 = (e) => {
    setGuestName34(e.target.value);
  };
  const handleGuestNameChange35 = (e) => {
    setGuestName35(e.target.value);
  };
  const handleGuestNameChange36 = (e) => {
    setGuestName36(e.target.value);
  };
  const handleGuestNameChange37 = (e) => {
    setGuestName37(e.target.value);
  };
  const handleGuestNameChange38 = (e) => {
    setGuestName38(e.target.value);
  };
  const handleGuestNameChange39 = (e) => {
    setGuestName39(e.target.value);
  };
  const handleGuestNameChange40 = (e) => {
    setGuestName40(e.target.value);
  };
  const handleGuestNameChange41 = (e) => {
    setGuestName41(e.target.value);
  };
  const handleGuestNameChange42 = (e) => {
    setGuestName42(e.target.value);
  };
  const handleGuestNameChange43 = (e) => {
    setGuestName43(e.target.value);
  };
  const handleGuestNameChange44 = (e) => {
    setGuestName44(e.target.value);
  };
  const handleGuestNameChange45 = (e) => {
    setGuestName45(e.target.value);
  };
  const handleGuestNameChange46 = (e) => {
    setGuestName46(e.target.value);
  };
  const handleGuestNameChange47 = (e) => {
    setGuestName47(e.target.value);
  };
  const handleGuestNameChange48 = (e) => {
    setGuestName48(e.target.value);
  };
  const handleGuestNameChange49 = (e) => {
    setGuestName49(e.target.value);
  };
  const handleGuestNameChange50 = (e) => {
    setGuestName50(e.target.value);
  };
  const handleGuestNameChange51 = (e) => {
    setGuestName51(e.target.value);
  };
  const handleGuestNameChange52 = (e) => {
    setGuestName52(e.target.value);
  };
  const handleGuestNameChange53 = (e) => {
    setGuestName53(e.target.value);
  };
  const handleGuestNameChange54 = (e) => {
    setGuestName54(e.target.value);
  };
  const handleGuestNameChange55 = (e) => {
    setGuestName55(e.target.value);
  };
  const handleGuestNameChange56 = (e) => {
    setGuestName56(e.target.value);
  };
  const handleGuestNameChange57 = (e) => {
    setGuestName57(e.target.value);
  };
  const handleGuestNameChange58 = (e) => {
    setGuestName58(e.target.value);
  };
  const handleGuestNameChange59 = (e) => {
    setGuestName59(e.target.value);
  };
  const handleGuestNameChange60 = (e) => {
    setGuestName60(e.target.value);
  };
  const handleGuestNameChange61 = (e) => {
    setGuestName61(e.target.value);
  };
  const handleGuestNameChange62 = (e) => {
    setGuestName62(e.target.value);
  };
  const handleGuestNameChange63 = (e) => {
    setGuestName63(e.target.value);
  };
  const handleGuestNameChange64 = (e) => {
    setGuestName64(e.target.value);
  };
  const handleGuestNameChange65 = (e) => {
    setGuestName65(e.target.value);
  };
  const handleGuestNameChange66 = (e) => {
    setGuestName66(e.target.value);
  };
  const handleGuestNameChange67 = (e) => {
    setGuestName67(e.target.value);
  };
  const handleGuestNameChange68 = (e) => {
    setGuestName68(e.target.value);
  };
  const handleGuestNameChange69 = (e) => {
    setGuestName69(e.target.value);
  };
  const handleGuestNameChange70 = (e) => {
    setGuestName70(e.target.value);
  };
  const handleGuestNameChange71 = (e) => {
    setGuestName71(e.target.value);
  };
  const handleGuestNameChange72 = (e) => {
    setGuestName72(e.target.value);
  };
  const handleGuestNameChange73 = (e) => {
    setGuestName73(e.target.value);
  };
  const handleGuestNameChange74 = (e) => {
    setGuestName74(e.target.value);
  };
  const handleGuestNameChange75 = (e) => {
    setGuestName75(e.target.value);
  };
  const handleGuestNameChange76 = (e) => {
    setGuestName76(e.target.value);
  };
  const handleGuestNameChange77 = (e) => {
    setGuestName77(e.target.value);
  };
  const handleGuestNameChange78 = (e) => {
    setGuestName78(e.target.value);
  };
  const handleGuestNameChange79 = (e) => {
    setGuestName79(e.target.value);
  };
  const handleGuestNameChange80 = (e) => {
    setGuestName80(e.target.value);
  };
  const handleGuestNameChange81 = (e) => {
    setGuestName81(e.target.value);
  };
  const handleGuestNameChange82 = (e) => {
    setGuestName82(e.target.value);
  };
  const handleGuestNameChange83 = (e) => {
    setGuestName83(e.target.value);
  };
  const handleGuestNameChange84 = (e) => {
    setGuestName84(e.target.value);
  };
  const handleGuestNameChange85 = (e) => {
    setGuestName85(e.target.value);
  };
  const handleGuestNameChange86 = (e) => {
    setGuestName86(e.target.value);
  };
  const handleGuestNameChange87 = (e) => {
    setGuestName87(e.target.value);
  };
  const handleGuestNameChange88 = (e) => {
    setGuestName88(e.target.value);
  };
  const handleGuestNameChange89 = (e) => {
    setGuestName89(e.target.value);
  };
  const handleGuestNameChange90 = (e) => {
    setGuestName90(e.target.value);
  };
  const handleGuestNameChange91 = (e) => {
    setGuestName91(e.target.value);
  };
  const handleGuestNameChange92 = (e) => {
    setGuestName92(e.target.value);
  };
  const handleGuestNameChange93 = (e) => {
    setGuestName93(e.target.value);
  };
  const handleGuestNameChange94 = (e) => {
    setGuestName94(e.target.value);
  };
  const handleGuestNameChange95 = (e) => {
    setGuestName95(e.target.value);
  };
  const handleGuestNameChange96 = (e) => {
    setGuestName96(e.target.value);
  };
  const handleGuestNameChange97 = (e) => {
    setGuestName97(e.target.value);
  };
  const handleGuestNameChange98 = (e) => {
    setGuestName98(e.target.value);
  };
  const handleGuestNameChange99 = (e) => {
    setGuestName99(e.target.value);
  };
  const handleGuestNameChange100 = (e) => {
    setGuestName100(e.target.value);
  };
  const handleGuestNameChange101 = (e) => {
    setGuestName101(e.target.value);
  };
  const handleGuestNameChange102 = (e) => {
    setGuestName102(e.target.value);
  };
  const handleGuestNameChange103 = (e) => {
    setGuestName103(e.target.value);
  };
  const handleGuestNameChange104 = (e) => {
    setGuestName104(e.target.value);
  };
  const handleGuestNameChange105 = (e) => {
    setGuestName105(e.target.value);
  };
  const handleGuestNameChange106 = (e) => {
    setGuestName106(e.target.value);
  };
  const handleGuestNameChange107 = (e) => {
    setGuestName107(e.target.value);
  };
  const handleGuestNameChange108 = (e) => {
    setGuestName108(e.target.value);
  };
  const handleGuestNameChange109 = (e) => {
    setGuestName109(e.target.value);
  };
  const handleGuestNameChange110 = (e) => {
    setGuestName110(e.target.value);
  };
  const handleGuestNameChange111 = (e) => {
    setGuestName111(e.target.value);
  };
  const handleGuestNameChange112 = (e) => {
    setGuestName112(e.target.value);
  };
  const handleGuestNameChange113 = (e) => {
    setGuestName113(e.target.value);
  };
  const handleGuestNameChange114 = (e) => {
    setGuestName114(e.target.value);
  };
  const handleGuestNameChange115 = (e) => {
    setGuestName115(e.target.value);
  };
  const handleGuestNameChange116 = (e) => {
    setGuestName116(e.target.value);
  };
  const handleGuestNameChange117 = (e) => {
    setGuestName117(e.target.value);
  };
  const handleGuestNameChange118 = (e) => {
    setGuestName118(e.target.value);
  };
  const handleGuestNameChange119 = (e) => {
    setGuestName119(e.target.value);
  };
  const handleGuestNameChange120 = (e) => {
    setGuestName120(e.target.value);
  };
  const handleGuestNameChange121 = (e) => {
    setGuestName121(e.target.value);
  };
  const handleGuestNameChange122 = (e) => {
    setGuestName122(e.target.value);
  };
  const handleGuestNameChange123 = (e) => {
    setGuestName123(e.target.value);
  };
  const handleGuestNameChange124 = (e) => {
    setGuestName124(e.target.value);
  };
  const handleGuestNameChange125 = (e) => {
    setGuestName125(e.target.value);
  };
  const handleGuestNameChange126 = (e) => {
    setGuestName126(e.target.value);
  };
  const handleGuestNameChange127 = (e) => {
    setGuestName127(e.target.value);
  };
  const handleGuestNameChange128 = (e) => {
    setGuestName128(e.target.value);
  };
  const handleGuestNameChange129 = (e) => {
    setGuestName129(e.target.value);
  };
  const handleGuestNameChange130 = (e) => {
    setGuestName130(e.target.value);
  };
  const handleGuestNameChange131 = (e) => {
    setGuestName131(e.target.value);
  };
  const handleGuestNameChange132 = (e) => {
    setGuestName132(e.target.value);
  };
  const handleGuestNameChange133 = (e) => {
    setGuestName133(e.target.value);
  };
  const handleGuestNameChange134 = (e) => {
    setGuestName134(e.target.value);
  };
  const handleGuestNameChange135 = (e) => {
    setGuestName135(e.target.value);
  };
  const handleGuestNameChange136 = (e) => {
    setGuestName136(e.target.value);
  };
  const handleGuestNameChange137 = (e) => {
    setGuestName137(e.target.value);
  };
  const handleGuestNameChange138 = (e) => {
    setGuestName138(e.target.value);
  };
  const handleGuestNameChange139 = (e) => {
    setGuestName139(e.target.value);
  };
  const handleGuestNameChange140 = (e) => {
    setGuestName140(e.target.value);
  };
  const handleGuestNameChange141 = (e) => {
    setGuestName141(e.target.value);
  };
  const handleGuestNameChange142 = (e) => {
    setGuestName142(e.target.value);
  };
  const handleGuestNameChange143 = (e) => {
    setGuestName143(e.target.value);
  };
  const handleGuestNameChange144 = (e) => {
    setGuestName144(e.target.value);
  };
  const handleGuestNameChange145 = (e) => {
    setGuestName145(e.target.value);
  };
  const handleGuestNameChange146 = (e) => {
    setGuestName146(e.target.value);
  };
  const handleGuestNameChange147 = (e) => {
    setGuestName147(e.target.value);
  };
  const handleGuestNameChange148 = (e) => {
    setGuestName148(e.target.value);
  };
  const handleGuestNameChange149 = (e) => {
    setGuestName149(e.target.value);
  };
  const handleGuestNameChange150 = (e) => {
    setGuestName150(e.target.value);
  };
  const handleGuestNameChange151 = (e) => {
    setGuestName151(e.target.value);
  };
  const handleGuestNameChange152 = (e) => {
    setGuestName152(e.target.value);
  };
  const handleGuestNameChange153 = (e) => {
    setGuestName153(e.target.value);
  };
  const handleGuestNameChange154 = (e) => {
    setGuestName154(e.target.value);
  };
  const handleGuestNameChange155 = (e) => {
    setGuestName155(e.target.value);
  };
  const handleGuestNameChange156 = (e) => {
    setGuestName156(e.target.value);
  };
  const handleGuestNameChange157 = (e) => {
    setGuestName157(e.target.value);
  };
  const handleGuestNameChange158 = (e) => {
    setGuestName158(e.target.value);
  };
  const handleGuestNameChange159 = (e) => {
    setGuestName159(e.target.value);
  };
  const handleGuestNameChange160 = (e) => {
    setGuestName160(e.target.value);
  };
  const handleGuestNameChange161 = (e) => {
    setGuestName161(e.target.value);
  };
  const handleGuestNameChange162 = (e) => {
    setGuestName162(e.target.value);
  };
  const handleGuestNameChange163 = (e) => {
    setGuestName163(e.target.value);
  };
  const handleGuestNameChange164 = (e) => {
    setGuestName164(e.target.value);
  };
  const handleGuestNameChange165 = (e) => {
    setGuestName165(e.target.value);
  };
  const handleGuestNameChange166 = (e) => {
    setGuestName166(e.target.value);
  };
  const handleGuestNameChange167 = (e) => {
    setGuestName167(e.target.value);
  };
  const handleGuestNameChange168 = (e) => {
    setGuestName168(e.target.value);
  };
  const handleGuestNameChange169 = (e) => {
    setGuestName169(e.target.value);
  };
  const handleGuestNameChange170 = (e) => {
    setGuestName170(e.target.value);
  };
  const handleGuestNameChange171 = (e) => {
    setGuestName171(e.target.value);
  };
  const handleGuestNameChange172 = (e) => {
    setGuestName172(e.target.value);
  };
  const handleGuestNameChange173 = (e) => {
    setGuestName173(e.target.value);
  };
  const handleGuestNameChange174 = (e) => {
    setGuestName174(e.target.value);
  };
  const handleGuestNameChange175 = (e) => {
    setGuestName175(e.target.value);
  };
  const handleGuestNameChange176 = (e) => {
    setGuestName176(e.target.value);
  };
  const handleGuestNameChange177 = (e) => {
    setGuestName177(e.target.value);
  };
  const handleGuestNameChange178 = (e) => {
    setGuestName178(e.target.value);
  };
  const handleGuestNameChange179 = (e) => {
    setGuestName179(e.target.value);
  };
  const handleGuestNameChange180 = (e) => {
    setGuestName180(e.target.value);
  };
  const handleGuestNameChange181 = (e) => {
    setGuestName181(e.target.value);
  };
  const handleGuestNameChange182 = (e) => {
    setGuestName182(e.target.value);
  };
  const handleGuestNameChange183 = (e) => {
    setGuestName183(e.target.value);
  };
  const handleGuestNameChange184 = (e) => {
    setGuestName184(e.target.value);
  };
  const handleGuestNameChange185 = (e) => {
    setGuestName185(e.target.value);
  };
  const handleGuestNameChange186 = (e) => {
    setGuestName186(e.target.value);
  };
  const handleGuestNameChange187 = (e) => {
    setGuestName187(e.target.value);
  };
  const handleGuestNameChange188 = (e) => {
    setGuestName188(e.target.value);
  };
  const handleGuestNameChange189 = (e) => {
    setGuestName189(e.target.value);
  };
  const handleGuestNameChange190 = (e) => {
    setGuestName190(e.target.value);
  };
  const handleGuestNameChange191 = (e) => {
    setGuestName191(e.target.value);
  };
  const handleGuestNameChange192 = (e) => {
    setGuestName192(e.target.value);
  };
  const handleGuestNameChange193 = (e) => {
    setGuestName193(e.target.value);
  };
  const handleGuestNameChange194 = (e) => {
    setGuestName194(e.target.value);
  };
  const handleGuestNameChange195 = (e) => {
    setGuestName195(e.target.value);
  };
  const handleGuestNameChange196 = (e) => {
    setGuestName196(e.target.value);
  };
  const handleGuestNameChange197 = (e) => {
    setGuestName197(e.target.value);
  };
  const handleGuestNameChange198 = (e) => {
    setGuestName198(e.target.value);
  };
  const handleGuestNameChange199 = (e) => {
    setGuestName199(e.target.value);
  };
  const handleGuestNameChange200 = (e) => {
    setGuestName200(e.target.value);
  };
  const handleGuestNameChange201 = (e) => {
    setGuestName201(e.target.value);
  };
  const handleGuestNameChange202 = (e) => {
    setGuestName202(e.target.value);
  };
  const handleGuestNameChange203 = (e) => {
    setGuestName203(e.target.value);
  };
  const handleGuestNameChange204 = (e) => {
    setGuestName204(e.target.value);
  };
  const handleGuestNameChange205 = (e) => {
    setGuestName205(e.target.value);
  };
  const handleGuestNameChange206 = (e) => {
    setGuestName206(e.target.value);
  };
  const handleGuestNameChange207 = (e) => {
    setGuestName207(e.target.value);
  };
  const handleGuestNameChange208 = (e) => {
    setGuestName208(e.target.value);
  };
  const handleGuestNameChange209 = (e) => {
    setGuestName209(e.target.value);
  };
  const handleGuestNameChange210 = (e) => {
    setGuestName210(e.target.value);
  };
  const handleGuestNameChange211 = (e) => {
    setGuestName211(e.target.value);
  };
  const handleGuestNameChange212 = (e) => {
    setGuestName212(e.target.value);
  };
  const handleGuestNameChange213 = (e) => {
    setGuestName213(e.target.value);
  };
  const handleGuestNameChange214 = (e) => {
    setGuestName214(e.target.value);
  };
  const handleGuestNameChange215 = (e) => {
    setGuestName215(e.target.value);
  };
  const handleGuestNameChange216 = (e) => {
    setGuestName216(e.target.value);
  };
  const handleGuestNameChange217 = (e) => {
    setGuestName217(e.target.value);
  };
  const handleGuestNameChange218 = (e) => {
    setGuestName218(e.target.value);
  };
  const handleGuestNameChange219 = (e) => {
    setGuestName219(e.target.value);
  };
  const handleGuestNameChange220 = (e) => {
    setGuestName220(e.target.value);
  };
  const handleGuestNameChange221 = (e) => {
    setGuestName221(e.target.value);
  };
  const handleGuestNameChange222 = (e) => {
    setGuestName222(e.target.value);
  };
  const handleGuestNameChange223 = (e) => {
    setGuestName223(e.target.value);
  };
  const handleGuestNameChange224 = (e) => {
    setGuestName224(e.target.value);
  };
  const handleGuestNameChange225 = (e) => {
    setGuestName225(e.target.value);
  };
  const handleGuestNameChange226 = (e) => {
    setGuestName226(e.target.value);
  };
  const handleGuestNameChange227 = (e) => {
    setGuestName227(e.target.value);
  };
  const handleGuestNameChange228 = (e) => {
    setGuestName228(e.target.value);
  };
  const handleGuestNameChange229 = (e) => {
    setGuestName229(e.target.value);
  };
  const handleGuestNameChange230 = (e) => {
    setGuestName230(e.target.value);
  };
  const handleGuestNameChange231 = (e) => {
    setGuestName231(e.target.value);
  };
  const handleGuestNameChange232 = (e) => {
    setGuestName232(e.target.value);
  };
  const handleGuestNameChange233 = (e) => {
    setGuestName233(e.target.value);
  };
  const handleGuestNameChange234 = (e) => {
    setGuestName234(e.target.value);
  };
  const handleGuestNameChange235 = (e) => {
    setGuestName235(e.target.value);
  };
  const handleGuestNameChange236 = (e) => {
    setGuestName236(e.target.value);
  };
  const handleGuestNameChange237 = (e) => {
    setGuestName237(e.target.value);
  };
  const handleGuestNameChange238 = (e) => {
    setGuestName238(e.target.value);
  };
  const handleGuestNameChange239 = (e) => {
    setGuestName239(e.target.value);
  };
  const handleGuestNameChange240 = (e) => {
    setGuestName240(e.target.value);
  };
  const handleGuestNameChange241 = (e) => {
    setGuestName241(e.target.value);
  };
  const handleGuestNameChange242 = (e) => {
    setGuestName242(e.target.value);
  };
  const handleGuestNameChange243 = (e) => {
    setGuestName243(e.target.value);
  };
  const handleGuestNameChange244 = (e) => {
    setGuestName244(e.target.value);
  };
  const handleGuestNameChange245 = (e) => {
    setGuestName245(e.target.value);
  };
  const handleGuestNameChange246 = (e) => {
    setGuestName246(e.target.value);
  };
  const handleGuestNameChange247 = (e) => {
    setGuestName247(e.target.value);
  };
  const handleGuestNameChange248 = (e) => {
    setGuestName248(e.target.value);
  };
  const handleGuestNameChange249 = (e) => {
    setGuestName249(e.target.value);
  };
  const handleGuestNameChange250 = (e) => {
    setGuestName250(e.target.value);
  };
  const handleGuestNameChange251 = (e) => {
    setGuestName251(e.target.value);
  };
  const handleGuestNameChange252 = (e) => {
    setGuestName252(e.target.value);
  };
  const handleGuestNameChange253 = (e) => {
    setGuestName253(e.target.value);
  };
  const handleGuestNameChange254 = (e) => {
    setGuestName254(e.target.value);
  };
  const handleGuestNameChange255 = (e) => {
    setGuestName255(e.target.value);
  };
  const handleGuestNameChange256 = (e) => {
    setGuestName256(e.target.value);
  };
  const handleGuestNameChange257 = (e) => {
    setGuestName257(e.target.value);
  };
  const handleGuestNameChange258 = (e) => {
    setGuestName258(e.target.value);
  };
  const handleGuestNameChange259 = (e) => {
    setGuestName259(e.target.value);
  };
  const handleGuestNameChange260 = (e) => {
    setGuestName260(e.target.value);
  };
  const handleGuestNameChange261 = (e) => {
    setGuestName261(e.target.value);
  };
  const handleGuestNameChange262 = (e) => {
    setGuestName262(e.target.value);
  };
  const handleGuestNameChange263 = (e) => {
    setGuestName263(e.target.value);
  };
  const handleGuestNameChange264 = (e) => {
    setGuestName264(e.target.value);
  };
  const handleGuestNameChange265 = (e) => {
    setGuestName265(e.target.value);
  };
  const handleGuestNameChange266 = (e) => {
    setGuestName266(e.target.value);
  };
  const handleGuestNameChange267 = (e) => {
    setGuestName267(e.target.value);
  };
  const handleGuestNameChange268 = (e) => {
    setGuestName268(e.target.value);
  };
  const handleGuestNameChange269 = (e) => {
    setGuestName269(e.target.value);
  };
  const handleGuestNameChange270 = (e) => {
    setGuestName270(e.target.value);
  };
  const handleGuestNameChange271 = (e) => {
    setGuestName271(e.target.value);
  };
  const handleGuestNameChange272 = (e) => {
    setGuestName272(e.target.value);
  };
  const handleGuestNameChange273 = (e) => {
    setGuestName273(e.target.value);
  };
  const handleGuestNameChange274 = (e) => {
    setGuestName274(e.target.value);
  };
  const handleGuestNameChange275 = (e) => {
    setGuestName275(e.target.value);
  };
  const handleGuestNameChange276 = (e) => {
    setGuestName276(e.target.value);
  };
  const handleGuestNameChange277 = (e) => {
    setGuestName277(e.target.value);
  };
  const handleGuestNameChange278 = (e) => {
    setGuestName278(e.target.value);
  };
  const handleGuestNameChange279 = (e) => {
    setGuestName279(e.target.value);
  };
  const handleGuestNameChange280 = (e) => {
    setGuestName280(e.target.value);
  };
  const handleGuestNameChange281 = (e) => {
    setGuestName281(e.target.value);
  };
  const handleGuestNameChange282 = (e) => {
    setGuestName282(e.target.value);
  };
  const handleGuestNameChange283 = (e) => {
    setGuestName283(e.target.value);
  };
  const handleGuestNameChange284 = (e) => {
    setGuestName284(e.target.value);
  };
  const handleGuestNameChange285 = (e) => {
    setGuestName285(e.target.value);
  };
  const handleGuestNameChange286 = (e) => {
    setGuestName286(e.target.value);
  };
  const handleGuestNameChange287 = (e) => {
    setGuestName287(e.target.value);
  };
  const handleGuestNameChange288 = (e) => {
    setGuestName288(e.target.value);
  };
  const handleGuestNameChange289 = (e) => {
    setGuestName289(e.target.value);
  };
  const handleGuestNameChange290 = (e) => {
    setGuestName290(e.target.value);
  };
  const handleGuestNameChange291 = (e) => {
    setGuestName291(e.target.value);
  };
  const handleGuestNameChange292 = (e) => {
    setGuestName292(e.target.value);
  };
  const handleGuestNameChange293 = (e) => {
    setGuestName293(e.target.value);
  };
  const handleGuestNameChange294 = (e) => {
    setGuestName294(e.target.value);
  };
  const handleGuestNameChange295 = (e) => {
    setGuestName295(e.target.value);
  };
  const handleGuestNameChange296 = (e) => {
    setGuestName296(e.target.value);
  };
  const handleGuestNameChange297 = (e) => {
    setGuestName297(e.target.value);
  };
  const handleGuestNameChange298 = (e) => {
    setGuestName298(e.target.value);
  };
  const handleGuestNameChange299 = (e) => {
    setGuestName299(e.target.value);
  };
  const handleGuestNameChange300 = (e) => {
    setGuestName300(e.target.value);
  };
  const handleGuestNameChange301 = (e) => {
    setGuestName301(e.target.value);
  };
  const handleGuestNameChange302 = (e) => {
    setGuestName302(e.target.value);
  };
  const handleGuestNameChange303 = (e) => {
    setGuestName303(e.target.value);
  };
  const handleGuestNameChange304 = (e) => {
    setGuestName304(e.target.value);
  };
  const handleGuestNameChange305 = (e) => {
    setGuestName305(e.target.value);
  };
  const handleGuestNameChange306 = (e) => {
    setGuestName306(e.target.value);
  };
  const handleGuestNameChange307 = (e) => {
    setGuestName307(e.target.value);
  };
  const handleGuestNameChange308 = (e) => {
    setGuestName308(e.target.value);
  };
  const handleGuestNameChange309 = (e) => {
    setGuestName309(e.target.value);
  };
  const handleGuestNameChange310 = (e) => {
    setGuestName310(e.target.value);
  };
  const handleGuestNameChange311 = (e) => {
    setGuestName311(e.target.value);
  };
  const handleGuestNameChange312 = (e) => {
    setGuestName312(e.target.value);
  };
  const handleGuestNameChange313 = (e) => {
    setGuestName313(e.target.value);
  };
  const handleGuestNameChange314 = (e) => {
    setGuestName314(e.target.value);
  };
  const handleGuestNameChange315 = (e) => {
    setGuestName315(e.target.value);
  };
  const handleGuestNameChange316 = (e) => {
    setGuestName316(e.target.value);
  };
  const handleGuestNameChange317 = (e) => {
    setGuestName317(e.target.value);
  };
  const handleGuestNameChange318 = (e) => {
    setGuestName318(e.target.value);
  };
  const handleGuestNameChange319 = (e) => {
    setGuestName319(e.target.value);
  };
  const handleGuestNameChange320 = (e) => {
    setGuestName320(e.target.value);
  };
  const handleGuestNameChange321 = (e) => {
    setGuestName321(e.target.value);
  };
  const handleGuestNameChange322 = (e) => {
    setGuestName322(e.target.value);
  };
  const handleGuestNameChange323 = (e) => {
    setGuestName323(e.target.value);
  };
  const handleGuestNameChange324 = (e) => {
    setGuestName324(e.target.value);
  };
  const handleGuestNameChange325 = (e) => {
    setGuestName325(e.target.value);
  };
  const handleGuestNameChange326 = (e) => {
    setGuestName326(e.target.value);
  };
  const handleGuestNameChange327 = (e) => {
    setGuestName327(e.target.value);
  };
  const handleGuestNameChange328 = (e) => {
    setGuestName328(e.target.value);
  };
  const handleGuestNameChange329 = (e) => {
    setGuestName329(e.target.value);
  };

  const handleRoomChange1 = (e) => {
    setSelectedRooms1(parseInt(e.target.value));
  };

  const handleRoomChange2 = (e) => {
    setSelectedRooms2(parseInt(e.target.value));
  };

  const handleRoomChange3 = (e) => {
    setSelectedRooms3(parseInt(e.target.value));
  };

  var strapiBaseURL = "https://cms.submaldives.com";
  const startDate = new Date(tourStartDate)
    .toLocaleDateString("en-UK", {
      day: "numeric",
      month: "short",
    })
    .toUpperCase();

  const endDate = new Date(tourEndDate)
    .toLocaleDateString("en-UK", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/,\s(\d{4})/, " $1")
    .toUpperCase();

  const handleProceedClick = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const handleBreadcrumbClick = (index) => {
    setCurrentStage(index);
  };

  useEffect(() => {
    // Fetch data from the Strapi server when the component is mounted
    const getRooms = async () => {
      const body = {
        boatName: boatName,
        startingDate: tourStartDate,
        endingDate: tourEndDate,
        tourID: tourID,
      };

      console.log(body);
      try {
        const response = await fetch("api/getRooms", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        const data = await response.json();
        console.log(data);
        const roomData = data.rooms;
        setRooms(roomData);
      } catch (error) {}
    };
    getRooms();
  }, [boatName, tourName, tourStartDate, tourEndDate, tourNights, tourID]);

  let total =
    parseInt(priceRoom1) +
    parseInt(priceRoom2) +
    parseInt(priceRoom3) +
    parseInt(priceRoom4) +
    parseInt(priceRoom5) +
    parseInt(priceRoom6) +
    parseInt(priceRoom7) +
    parseInt(priceRoom8) +
    parseInt(priceRoom9) +
    parseInt(priceRoom10) +
    parseInt(priceRoom11) +
    parseInt(priceRoom12) +
    parseInt(priceRoom13) +
    parseInt(priceRoom14) +
    parseInt(priceRoom15) +
    parseInt(priceRoom16) +
    parseInt(priceRoom17) +
    parseInt(priceRoom18) +
    parseInt(priceRoom19) +
    parseInt(priceRoom20) +
    parseInt(priceRoom21) +
    parseInt(priceRoom22) +
    parseInt(priceRoom23) +
    parseInt(priceRoom24) +
    parseInt(priceRoom25) +
    parseInt(priceRoom26) +
    parseInt(priceRoom27) +
    parseInt(priceRoom28) +
    parseInt(priceRoom29) +
    parseInt(priceRoom30) +
    parseInt(priceRoom31) +
    parseInt(priceRoom32) +
    parseInt(priceRoom33) +
    parseInt(priceRoom34) +
    parseInt(priceRoom35) +
    parseInt(priceRoom36) +
    parseInt(priceRoom37) +
    parseInt(priceRoom38) +
    parseInt(priceRoom39) +
    parseInt(priceRoom40) +
    parseInt(priceRoom41) +
    parseInt(priceRoom42) +
    parseInt(priceRoom43) +
    parseInt(priceRoom44) +
    parseInt(priceRoom45) +
    parseInt(priceRoom46) +
    parseInt(priceRoom47) +
    parseInt(priceRoom48) +
    parseInt(priceRoom49) +
    parseInt(priceRoom50) +
    parseInt(priceRoom51) +
    parseInt(priceRoom52) +
    parseInt(priceRoom53) +
    parseInt(priceRoom54) +
    parseInt(priceRoom55) +
    parseInt(priceRoom56) +
    parseInt(priceRoom57) +
    parseInt(priceRoom58) +
    parseInt(priceRoom59) +
    parseInt(priceRoom60) +
    parseInt(priceRoom61) +
    parseInt(priceRoom62) +
    parseInt(priceRoom63) +
    parseInt(priceRoom64) +
    parseInt(priceRoom65) +
    parseInt(priceRoom66) +
    parseInt(priceRoom67) +
    parseInt(priceRoom68) +
    parseInt(priceRoom69) +
    parseInt(priceRoom70) +
    parseInt(priceRoom71) +
    parseInt(priceRoom72) +
    parseInt(priceRoom73) +
    parseInt(priceRoom74) +
    parseInt(priceRoom75) +
    parseInt(priceRoom76) +
    parseInt(priceRoom77) +
    parseInt(priceRoom78) +
    parseInt(priceRoom79) +
    parseInt(priceRoom80) +
    parseInt(priceRoom81) +
    parseInt(priceRoom82) +
    parseInt(priceRoom83) +
    parseInt(priceRoom84) +
    parseInt(priceRoom85) +
    parseInt(priceRoom86) +
    parseInt(priceRoom87) +
    parseInt(priceRoom88) +
    parseInt(priceRoom89) +
    parseInt(priceRoom90) +
    parseInt(priceRoom91) +
    parseInt(priceRoom92) +
    parseInt(priceRoom93) +
    parseInt(priceRoom94) +
    parseInt(priceRoom95) +
    parseInt(priceRoom96) +
    parseInt(priceRoom97) +
    parseInt(priceRoom98) +
    parseInt(priceRoom99) +
    parseInt(priceRoom100) +
    parseInt(priceRoom101) +
    parseInt(priceRoom102) +
    parseInt(priceRoom103) +
    parseInt(priceRoom104) +
    parseInt(priceRoom105) +
    parseInt(priceRoom106) +
    parseInt(priceRoom107) +
    parseInt(priceRoom108);

  const GuestCountTotal = (event) => {
    setGuestNamesCount(guestNamesCount + 1);
  };

  const serviceCharge = total * 0.1;
  const GST = (total + serviceCharge) * 0.16;
  const greenTaxPrem = 6 * tourNights;
  const greenTax = greenTaxPrem * guestNamesCount;

  if (!room || room.length === 0 || room.some((item) => item === undefined)) {
    return <div>Loading...</div>;
  }

  console.log(room[0]);

  const renderStage = () => {
    switch (currentStage) {
      case 0:
        return (
          <div>
            <h3>Select Suite</h3>
            <div>
              <h1>Available Rooms</h1>
              <Container>
                {room ? (
                  <Row>
                    <Col>
                      <Card>
                        <Row>
                          <Col>
                            <Card.Img
                              variant="top"
                              src={strapiBaseURL + room[0].suiteImage[0]}
                            />
                          </Col>
                          <Col>
                            <Card.Body>
                              <Card.Title>
                                {room[0].name + " - " + room[0].deckName}
                              </Card.Title>
                              <Card.Text>{room[0].bedType}</Card.Text>
                              <Card.Text>
                                Starting price: {room[0].startingPrice}
                              </Card.Text>
                              <Card.Text>
                                {room[0].name === "Master Suite" ? (
                                  <>Availability: {room[0].masterRoom}</>
                                ) : room[0].name_type ===
                                  "Guest Suite.Upper Deck" ? (
                                  <>Availability: {room[0].upperDeckGuest}</>
                                ) : room[0].name_type ===
                                  "Guest Suite.Lower Deck" ? (
                                  <>Availability: {room[0].lowerDeckGuest}</>
                                ) : null}
                              </Card.Text>
                            </Card.Body>
                          </Col>
                        </Row>

                        <Col>
                          <Form.Group>
                            <Form.Label className="ms-2">
                              Select Quantity
                            </Form.Label>
                            <select
                              className="ms-2"
                              onChange={handleRoomChange1}
                            >
                              <option disabled selected>
                                Select Room Quantity
                              </option>
                              {room[0].name === "Master Suite"
                                ? Array.from(
                                    { length: room[0].masterRoom },
                                    (_, index) => (
                                      <option key={index + 1} value={index + 1}>
                                        {index + 1}
                                      </option>
                                    )
                                  )
                                : room[0].name_type === "Guest Suite.Upper Deck"
                                ? Array.from(
                                    { length: room[0].upperDeckGuest },
                                    (_, index) => (
                                      <option key={index + 1} value={index + 1}>
                                        {index + 1}
                                      </option>
                                    )
                                  )
                                : room[0].name_type === "Guest Suite.Lower Deck"
                                ? Array.from(
                                    { length: room[0].lowerDeckGuest },
                                    (_, index) => (
                                      <option key={index + 1} value={index + 1}>
                                        {index + 1}
                                      </option>
                                    )
                                  )
                                : null}
                            </select>
                          </Form.Group>
                        </Col>
                      </Card>
                    </Col>
                  </Row>
                ) : null}
                {room ? (
                  <Row>
                    <Col>
                      <Card>
                        <Row>
                          <Col>
                            <Card.Img
                              variant="top"
                              src={strapiBaseURL + room[1].suiteImage[0]}
                            />
                          </Col>
                          <Col>
                            <Card.Body>
                              <Card.Title>
                                {room[1].name + " - " + room[1].deckName}
                              </Card.Title>
                              <Card.Text>{room[1].bedType}</Card.Text>
                              <Card.Text>
                                Starting price: {room[1].startingPrice}
                              </Card.Text>
                              <Card.Text>
                                {room[1].name === "Master Suite" ? (
                                  <>Availability: {room[1].masterRoom}</>
                                ) : room[1].name_type ===
                                  "Guest Suite.Upper Deck" ? (
                                  <>Availability: {room[1].upperDeckGuest}</>
                                ) : room[1].name_type ===
                                  "Guest Suite.Lower Deck" ? (
                                  <>Availability: {room[1].lowerDeckGuest}</>
                                ) : null}
                              </Card.Text>
                            </Card.Body>
                          </Col>
                        </Row>

                        <Col>
                          <Form.Group>
                            <Form.Label className="ms-2">
                              Select Quantity
                            </Form.Label>
                            <select
                              className="ms-2"
                              onChange={handleRoomChange2}
                            >
                              <option disabled selected>
                                Select Room Quantity
                              </option>
                              {room[1].name === "Master Suite"
                                ? Array.from(
                                    { length: room[1].masterRoom },
                                    (_, index) => (
                                      <option key={index + 1} value={index + 1}>
                                        {index + 1}
                                      </option>
                                    )
                                  )
                                : room[1].name_type === "Guest Suite.Upper Deck"
                                ? Array.from(
                                    { length: room[1].upperDeckGuest },
                                    (_, index) => (
                                      <option key={index + 1} value={index + 1}>
                                        {index + 1}
                                      </option>
                                    )
                                  )
                                : room[1].name_type === "Guest Suite.Lower Deck"
                                ? Array.from(
                                    { length: room[1].lowerDeckGuest },
                                    (_, index) => (
                                      <option key={index + 1} value={index + 1}>
                                        {index + 1}
                                      </option>
                                    )
                                  )
                                : null}
                            </select>
                          </Form.Group>
                        </Col>
                      </Card>
                    </Col>
                  </Row>
                ) : null}
                {room ? (
                  <Row>
                    <Col>
                      <Card>
                        <Row>
                          <Col>
                            <Card.Img
                              variant="top"
                              src={strapiBaseURL + room[2].suiteImage[0]}
                            />
                          </Col>
                          <Col>
                            <Card.Body>
                              <Card.Title>
                                {room[2].name + " - " + room[2].deckName}
                              </Card.Title>
                              <Card.Text>{room[2].bedType}</Card.Text>
                              <Card.Text>
                                Starting price: {room[2].startingPrice}
                              </Card.Text>
                              <Card.Text>
                                {room[2].name === "Master Suite" ? (
                                  <>Availability: {room[2].masterRoom}</>
                                ) : room[2].name_type ===
                                  "Guest Suite.Upper Deck" ? (
                                  <>Availability: {room[2].upperDeckGuest}</>
                                ) : room[2].name_type ===
                                  "Guest Suite.Lower Deck" ? (
                                  <>Availability: {room[2].lowerDeckGuest}</>
                                ) : null}
                              </Card.Text>
                            </Card.Body>
                          </Col>
                        </Row>

                        <Col>
                          <Form.Group>
                            <Form.Label className="ms-2">
                              Select Quantity
                            </Form.Label>
                            <select
                              className="ms-2"
                              onChange={handleRoomChange3}
                            >
                              <option disabled selected>
                                Select Room Quantity
                              </option>
                              {room[2].name === "Master Suite"
                                ? Array.from(
                                    { length: room[2].masterRoom },
                                    (_, index) => (
                                      <option key={index + 1} value={index + 1}>
                                        {index + 1}
                                      </option>
                                    )
                                  )
                                : room[2].name_type === "Guest Suite.Upper Deck"
                                ? Array.from(
                                    { length: room[2].upperDeckGuest },
                                    (_, index) => (
                                      <option key={index + 1} value={index + 1}>
                                        {index + 1}
                                      </option>
                                    )
                                  )
                                : room[2].name_type === "Guest Suite.Lower Deck"
                                ? Array.from(
                                    { length: room[2].lowerDeckGuest },
                                    (_, index) => (
                                      <option key={index + 1} value={index + 1}>
                                        {index + 1}
                                      </option>
                                    )
                                  )
                                : null}
                            </select>
                          </Form.Group>
                        </Col>
                      </Card>
                    </Col>
                  </Row>
                ) : null}
              </Container>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            {!selectedRooms1 || selectedRooms1.length === 0 ? null : (
              <div className="mb-2 card p-2">
                <p>{room[0].name}</p>
                {selectedRooms1 === 1 && (
                  <>
                    <Form.Group>
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom1(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy1(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy1 === "Single Occupancy" ? (
                        <div className="row">
                          <div className="col-md-3">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="option1"
                                onChange={(event) => {
                                  GuestCountTotal(event);
                                }}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
                              >
                                Male
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="option2"
                                onChange={(event) => {
                                  GuestCountTotal(event);
                                }}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio2"
                              >
                                Female
                              </label>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <Form.Control
                              type="text"
                              placeholder="Enter Guest Name"
                              value={guestName1}
                              onChange={handleGuestNameChange1}
                            />
                          </div>
                        </div>
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                                className="mb-2"
                                type="text"
                                placeholder="Enter Guest Name"
                                value={guestName2}
                                onChange={handleGuestNameChange2}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                                type="text"
                                placeholder="Enter Guest Name"
                                value={guestName3}
                                onChange={handleGuestNameChange3}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms1 === 2 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom2(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy2(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy2 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                          <div className="col-md-3">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="option1"
                                onChange={(event) => {
                                  GuestCountTotal(event);
                                }}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
                              >
                                Male
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="option2"
                                onChange={(event) => {
                                  GuestCountTotal(event);
                                }}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio2"
                              >
                                Female
                              </label>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <Form.Control
                              type="text"
                              placeholder="Enter Guest Name"
                              value={guestName4}
                              onChange={handleGuestNameChange4}
                            />
                          </div>
                        </div>
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                                className="mb-2"
                                type="text"
                                placeholder="Enter Guest Name"
                                value={guestName5}
                                onChange={handleGuestNameChange5}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                                type="text"
                                placeholder="Enter Guest Name"
                                value={guestName6}
                                onChange={handleGuestNameChange6}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </Form.Group>
                    <Form.Group>
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom3(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy3(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy3 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                          <div className="col-md-3">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="option1"
                                onChange={(event) => {
                                  GuestCountTotal(event);
                                }}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
                              >
                                Male
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="option2"
                                onChange={(event) => {
                                  GuestCountTotal(event);
                                }}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio2"
                              >
                                Female
                              </label>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <Form.Control
                              type="text"
                              placeholder="Enter Guest Name"
                              value={guestName7}
                              onChange={handleGuestNameChange7}
                            />
                          </div>
                        </div>
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                                className="mb-2"
                                type="text"
                                placeholder="Enter Guest Name"
                                value={guestName8}
                                onChange={handleGuestNameChange8}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                                type="text"
                                placeholder="Enter Guest Name"
                                value={guestName9}
                                onChange={handleGuestNameChange9}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms1 === 3 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom4(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy4(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy4 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                          <div className="col-md-3">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="option1"
                                onChange={(event) => {
                                  GuestCountTotal(event);
                                }}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
                              >
                                Male
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="option2"
                                onChange={(event) => {
                                  GuestCountTotal(event);
                                }}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio2"
                              >
                                Female
                              </label>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <Form.Control
                              type="text"
                              placeholder="Enter Guest Name"
                              value={guestName10}
                              onChange={handleGuestNameChange10}
                            />
                          </div>
                        </div>
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                                className="mb-2"
                                type="text"
                                placeholder="Enter Guest Name"
                                value={guestName11}
                                onChange={handleGuestNameChange11}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                                type="text"
                                placeholder="Enter Guest Name"
                                value={guestName12}
                                onChange={handleGuestNameChange12}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom5(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy5(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy5 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                          <div className="col-md-3">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="option1"
                                onChange={(event) => {
                                  GuestCountTotal(event);
                                }}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
                              >
                                Male
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="option2"
                                onChange={(event) => {
                                  GuestCountTotal(event);
                                }}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio2"
                              >
                                Female
                              </label>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <Form.Control
                              type="text"
                              placeholder="Enter Guest Name"
                              value={guestName13}
                              onChange={handleGuestNameChange13}
                            />
                          </div>
                        </div>
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                                className="mb-2"
                                type="text"
                                placeholder="Enter Guest Name"
                                value={guestName14}
                                onChange={handleGuestNameChange14}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                                type="text"
                                placeholder="Enter Guest Name"
                                value={guestName15}
                                onChange={handleGuestNameChange15}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom6(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy6(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy6 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                          <div className="col-md-3">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="option1"
                                onChange={(event) => {
                                  GuestCountTotal(event);
                                }}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
                              >
                                Male
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="option2"
                                onChange={(event) => {
                                  GuestCountTotal(event);
                                }}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio2"
                              >
                                Female
                              </label>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <Form.Control
                              type="text"
                              placeholder="Enter Guest Name"
                              value={guestName16}
                              onChange={handleGuestNameChange16}
                            />
                          </div>
                        </div>
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                                className="mb-2"
                                type="text"
                                placeholder="Enter Guest Name"
                                value={guestName17}
                                onChange={handleGuestNameChange17}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                                type="text"
                                placeholder="Enter Guest Name"
                                value={guestName18}
                                onChange={handleGuestNameChange18}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms1 === 4 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom7(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy7(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy7 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName19}
                          onChange={handleGuestNameChange19}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName20}
                            onChange={handleGuestNameChange20}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName22}
                            onChange={handleGuestNameChange22}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom8(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy8(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy8 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName23}
                          onChange={handleGuestNameChange23}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName24}
                            onChange={handleGuestNameChange24}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName25}
                            onChange={handleGuestNameChange25}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom9(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy9(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy9 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName26}
                          onChange={handleGuestNameChange26}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName27}
                            onChange={handleGuestNameChange27}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName28}
                            onChange={handleGuestNameChange28}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom10(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy10(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy10 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName29}
                          onChange={handleGuestNameChange29}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName30}
                            onChange={handleGuestNameChange30}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName31}
                            onChange={handleGuestNameChange31}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms1 === 5 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom11(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy11(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy11 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName32}
                          onChange={handleGuestNameChange32}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName33}
                            onChange={handleGuestNameChange33}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName34}
                            onChange={handleGuestNameChange34}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom12(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy12(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy12 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName35}
                          onChange={handleGuestNameChange35}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName36}
                            onChange={handleGuestNameChange36}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName37}
                            onChange={handleGuestNameChange37}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom13(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy13(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy13 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName38}
                          onChange={handleGuestNameChange38}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName39}
                            onChange={handleGuestNameChange39}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName40}
                            onChange={handleGuestNameChange40}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom14(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy14(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy14 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName41}
                          onChange={handleGuestNameChange41}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName42}
                            onChange={handleGuestNameChange42}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName43}
                            onChange={handleGuestNameChange43}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom15(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy15(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy15 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName44}
                          onChange={handleGuestNameChange44}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName45}
                            onChange={handleGuestNameChange45}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName46}
                            onChange={handleGuestNameChange46}
                          />
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms1 === 6 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom16(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy16(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy16 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName47}
                          onChange={handleGuestNameChange47}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName48}
                            onChange={handleGuestNameChange48}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName49}
                            onChange={handleGuestNameChange49}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom17(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy17(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy17 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName50}
                          onChange={handleGuestNameChange50}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName51}
                            onChange={handleGuestNameChange51}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName52}
                            onChange={handleGuestNameChange52}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom18(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy18(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy18 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName53}
                          onChange={handleGuestNameChange53}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName54}
                            onChange={handleGuestNameChange54}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName55}
                            onChange={handleGuestNameChange55}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom19(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy19(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy19 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName56}
                          onChange={handleGuestNameChange56}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName57}
                            onChange={handleGuestNameChange57}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName58}
                            onChange={handleGuestNameChange58}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom20(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy20(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy20 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName59}
                          onChange={handleGuestNameChange59}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName60}
                            onChange={handleGuestNameChange60}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName61}
                            onChange={handleGuestNameChange61}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom21(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy21(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy21 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName62}
                          onChange={handleGuestNameChange62}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName63}
                            onChange={handleGuestNameChange63}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName64}
                            onChange={handleGuestNameChange64}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms1 === 7 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom22(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy22(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy22 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName65}
                          onChange={handleGuestNameChange65}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName66}
                            onChange={handleGuestNameChange66}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName67}
                            onChange={handleGuestNameChange67}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom23(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy23(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy23 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName68}
                          onChange={handleGuestNameChange68}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName69}
                            onChange={handleGuestNameChange69}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName70}
                            onChange={handleGuestNameChange70}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom24(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy24(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy24 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName71}
                          onChange={handleGuestNameChange71}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName72}
                            onChange={handleGuestNameChange72}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName73}
                            onChange={handleGuestNameChange73}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom25(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy25(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy25 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName74}
                          onChange={handleGuestNameChange74}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName75}
                            onChange={handleGuestNameChange75}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName76}
                            onChange={handleGuestNameChange76}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom26(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy26(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy26 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName77}
                          onChange={handleGuestNameChange77}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName78}
                            onChange={handleGuestNameChange78}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName79}
                            onChange={handleGuestNameChange79}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom27(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy27(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy27 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName80}
                          onChange={handleGuestNameChange80}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName81}
                            onChange={handleGuestNameChange81}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName82}
                            onChange={handleGuestNameChange82}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom28(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy28(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy28 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName83}
                          onChange={handleGuestNameChange83}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName84}
                            onChange={handleGuestNameChange84}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName85}
                            onChange={handleGuestNameChange85}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms1 === 8 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom29(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy29(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy29 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName86}
                          onChange={handleGuestNameChange86}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName87}
                            onChange={handleGuestNameChange87}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName88}
                            onChange={handleGuestNameChange88}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom30(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy30(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy30 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName89}
                          onChange={handleGuestNameChange89}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName90}
                            onChange={handleGuestNameChange90}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName91}
                            onChange={handleGuestNameChange91}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom31(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy31(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy31 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName92}
                          onChange={handleGuestNameChange92}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName93}
                            onChange={handleGuestNameChange93}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName94}
                            onChange={handleGuestNameChange94}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom32(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy32(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy32 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName95}
                          onChange={handleGuestNameChange95}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName96}
                            onChange={handleGuestNameChange96}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName97}
                            onChange={handleGuestNameChange97}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom33(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy33(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy33 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName98}
                          onChange={handleGuestNameChange98}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName99}
                            onChange={handleGuestNameChange99}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName100}
                            onChange={handleGuestNameChange100}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom34(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy34(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy34 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName101}
                          onChange={handleGuestNameChange101}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName102}
                            onChange={handleGuestNameChange102}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName103}
                            onChange={handleGuestNameChange103}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom35(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy35(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy35 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                               <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName104}
                          onChange={handleGuestNameChange104}
                        />
                            </div>
                          </div>
                       
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName105}
                            onChange={handleGuestNameChange105}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName106}
                            onChange={handleGuestNameChange106}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom36(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy36(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[0].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy36 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName107}
                          onChange={handleGuestNameChange107}
                        />
                            </div>
                          </div>
                        
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                        <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName108}
                            onChange={handleGuestNameChange108}
                          />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                  onChange={(event) => {
                                    GuestCountTotal(event);
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName109}
                            onChange={handleGuestNameChange109}
                          />
                            </div>
                          </div>
                          
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
              </div>
            )}
            {!selectedRooms2 || selectedRooms2.length === 0 ? null : (
              <div className="mb-2 card p-2">
                <p>{room[1].name}</p>
                {selectedRooms2 === 1 && (
                  <>
                    <Form.Group>
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom37(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy37(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy37 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName110}
                          onChange={handleGuestNameChange110}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName111}
                            onChange={handleGuestNameChange111}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName112}
                            onChange={handleGuestNameChange112}
                          />
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms2 === 2 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom38(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy38(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy38 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName113}
                          onChange={handleGuestNameChange113}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName114}
                            onChange={handleGuestNameChange114}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName115}
                            onChange={handleGuestNameChange115}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group>
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom39(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy39(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy39 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName116}
                          onChange={handleGuestNameChange116}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName117}
                            onChange={handleGuestNameChange117}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName118}
                            onChange={handleGuestNameChange118}
                          />
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms2 === 3 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom40(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy40(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy40 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName119}
                          onChange={handleGuestNameChange119}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName120}
                            onChange={handleGuestNameChange120}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName121}
                            onChange={handleGuestNameChange121}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom41(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy41(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy41 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName122}
                          onChange={handleGuestNameChange122}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName123}
                            onChange={handleGuestNameChange123}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName124}
                            onChange={handleGuestNameChange124}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom42(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy42(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy42 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName125}
                          onChange={handleGuestNameChange125}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName126}
                            onChange={handleGuestNameChange126}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName127}
                            onChange={handleGuestNameChange127}
                          />
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms2 === 4 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom43(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy43(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy43 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName128}
                          onChange={handleGuestNameChange128}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName129}
                            onChange={handleGuestNameChange129}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName130}
                            onChange={handleGuestNameChange130}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom44(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy44(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy44 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName131}
                          onChange={handleGuestNameChange131}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName132}
                            onChange={handleGuestNameChange132}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName133}
                            onChange={handleGuestNameChange133}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom45(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy45(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy45 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName134}
                          onChange={handleGuestNameChange134}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName135}
                            onChange={handleGuestNameChange135}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName136}
                            onChange={handleGuestNameChange136}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom46(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy46(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy46 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName137}
                          onChange={handleGuestNameChange137}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName138}
                            onChange={handleGuestNameChange138}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName139}
                            onChange={handleGuestNameChange139}
                          />
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms2 === 5 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom47(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy47(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy47 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName140}
                          onChange={handleGuestNameChange140}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName141}
                            onChange={handleGuestNameChange141}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName142}
                            onChange={handleGuestNameChange142}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom48(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy48(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy48 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName143}
                          onChange={handleGuestNameChange143}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName144}
                            onChange={handleGuestNameChange144}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName145}
                            onChange={handleGuestNameChange145}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom49(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy49(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy49 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName146}
                          onChange={handleGuestNameChange146}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName147}
                            onChange={handleGuestNameChange147}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName148}
                            onChange={handleGuestNameChange148}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom50(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy50(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy50 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName149}
                          onChange={handleGuestNameChange149}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName150}
                            onChange={handleGuestNameChange150}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName151}
                            onChange={handleGuestNameChange151}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom51(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy51(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy51 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName152}
                          onChange={handleGuestNameChange152}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName153}
                            onChange={handleGuestNameChange153}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName154}
                            onChange={handleGuestNameChange154}
                          />
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms2 === 6 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom52(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy52(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy52 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName155}
                          onChange={handleGuestNameChange155}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName156}
                            onChange={handleGuestNameChange156}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName157}
                            onChange={handleGuestNameChange157}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom53(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy53(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy53 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName158}
                          onChange={handleGuestNameChange158}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName159}
                            onChange={handleGuestNameChange159}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName160}
                            onChange={handleGuestNameChange160}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom54(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy54(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy54 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName161}
                          onChange={handleGuestNameChange161}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName162}
                            onChange={handleGuestNameChange162}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName163}
                            onChange={handleGuestNameChange163}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom55(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy55(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy55 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName164}
                          onChange={handleGuestNameChange164}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName165}
                            onChange={handleGuestNameChange165}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName166}
                            onChange={handleGuestNameChange166}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom56(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy56(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy56 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName168}
                          onChange={handleGuestNameChange168}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName169}
                            onChange={handleGuestNameChange169}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName170}
                            onChange={handleGuestNameChange170}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom57(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy57(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy57 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName171}
                          onChange={handleGuestNameChange171}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName172}
                            onChange={handleGuestNameChange172}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName173}
                            onChange={handleGuestNameChange173}
                          />
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms2 === 7 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom58(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy58(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy58 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName174}
                          onChange={handleGuestNameChange174}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName175}
                            onChange={handleGuestNameChange175}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName176}
                            onChange={handleGuestNameChange176}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom59(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy59(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy59 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName177}
                          onChange={handleGuestNameChange177}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName178}
                            onChange={handleGuestNameChange178}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName179}
                            onChange={handleGuestNameChange179}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom60(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy60(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy60 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName181}
                          onChange={handleGuestNameChange181}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName182}
                            onChange={handleGuestNameChange182}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName183}
                            onChange={handleGuestNameChange183}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom61(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy61(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy61 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName184}
                          onChange={handleGuestNameChange184}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName185}
                            onChange={handleGuestNameChange185}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName186}
                            onChange={handleGuestNameChange186}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom62(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy62(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy62 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName187}
                          onChange={handleGuestNameChange187}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName188}
                            onChange={handleGuestNameChange188}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName189}
                            onChange={handleGuestNameChange189}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom63(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy63(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy63 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName190}
                          onChange={handleGuestNameChange190}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName191}
                            onChange={handleGuestNameChange191}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName192}
                            onChange={handleGuestNameChange192}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom64(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy64(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy64 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName193}
                          onChange={handleGuestNameChange193}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName194}
                            onChange={handleGuestNameChange194}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName195}
                            onChange={handleGuestNameChange195}
                          />
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms2 === 8 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom65(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy65(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy65 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName196}
                          onChange={handleGuestNameChange196}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName197}
                            onChange={handleGuestNameChange197}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName198}
                            onChange={handleGuestNameChange198}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom66(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy66(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy66 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName199}
                          onChange={handleGuestNameChange199}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName200}
                            onChange={handleGuestNameChange200}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName201}
                            onChange={handleGuestNameChange201}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom67(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy67(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy67 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName202}
                          onChange={handleGuestNameChange202}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName203}
                            onChange={handleGuestNameChange203}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName204}
                            onChange={handleGuestNameChange204}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom68(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy68(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy68 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName205}
                          onChange={handleGuestNameChange205}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName206}
                            onChange={handleGuestNameChange206}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName207}
                            onChange={handleGuestNameChange207}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom69(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy69(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy69 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName208}
                          onChange={handleGuestNameChange208}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName209}
                            onChange={handleGuestNameChange209}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName210}
                            onChange={handleGuestNameChange210}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom70(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy70(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy70 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName211}
                          onChange={handleGuestNameChange211}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName212}
                            onChange={handleGuestNameChange212}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName213}
                            onChange={handleGuestNameChange213}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom71(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy71(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy71 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName214}
                          onChange={handleGuestNameChange214}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName215}
                            onChange={handleGuestNameChange215}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName216}
                            onChange={handleGuestNameChange216}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom72(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy72(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[1].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy72 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName217}
                          onChange={handleGuestNameChange217}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName218}
                            onChange={handleGuestNameChange218}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName219}
                            onChange={handleGuestNameChange219}
                          />
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
              </div>
            )}
            {!selectedRooms3 || selectedRooms3.length === 0 ? null : (
              <div className="mb-2 card p-2">
                <p>{room[2].name}</p>
                {selectedRooms3 === 1 && (
                  <>
                    <Form.Group>
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom73(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy73(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy73 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName220}
                          onChange={handleGuestNameChange220}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName221}
                            onChange={handleGuestNameChange221}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName222}
                            onChange={handleGuestNameChange222}
                          />
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms3 === 2 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom74(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy74(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy74 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName223}
                          onChange={handleGuestNameChange223}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName224}
                            onChange={handleGuestNameChange224}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName225}
                            onChange={handleGuestNameChange225}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group>
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom75(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy75(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy75 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName226}
                          onChange={handleGuestNameChange226}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName227}
                            onChange={handleGuestNameChange227}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName228}
                            onChange={handleGuestNameChange228}
                          />
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms3 === 3 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom76(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy76(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy76 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName229}
                          onChange={handleGuestNameChange229}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName230}
                            onChange={handleGuestNameChange230}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName231}
                            onChange={handleGuestNameChange231}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom77(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy77(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy77 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName232}
                          onChange={handleGuestNameChange232}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName233}
                            onChange={handleGuestNameChange233}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName234}
                            onChange={handleGuestNameChange234}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom78(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy78(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy78 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName235}
                          onChange={handleGuestNameChange235}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName236}
                            onChange={handleGuestNameChange236}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName237}
                            onChange={handleGuestNameChange237}
                          />
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms3 === 4 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom79(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy79(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy79 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName238}
                          onChange={handleGuestNameChange238}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName239}
                            onChange={handleGuestNameChange239}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName240}
                            onChange={handleGuestNameChange240}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom80(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy80(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy80 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName241}
                          onChange={handleGuestNameChange241}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName242}
                            onChange={handleGuestNameChange242}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName243}
                            onChange={handleGuestNameChange243}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom81(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy81(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy81 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName244}
                          onChange={handleGuestNameChange244}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName245}
                            onChange={handleGuestNameChange245}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName246}
                            onChange={handleGuestNameChange246}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom82(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy82(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy82 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName247}
                          onChange={handleGuestNameChange247}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName248}
                            onChange={handleGuestNameChange248}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName249}
                            onChange={handleGuestNameChange249}
                          />
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms3 === 5 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom83(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy83(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy83 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName250}
                          onChange={handleGuestNameChange250}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName251}
                            onChange={handleGuestNameChange251}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName252}
                            onChange={handleGuestNameChange252}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom84(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy84(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy84 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName253}
                          onChange={handleGuestNameChange253}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName254}
                            onChange={handleGuestNameChange144}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName255}
                            onChange={handleGuestNameChange255}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom85(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy85(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy85 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName256}
                          onChange={handleGuestNameChange256}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName257}
                            onChange={handleGuestNameChange257}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName258}
                            onChange={handleGuestNameChange258}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom86(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy86(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy86 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName259}
                          onChange={handleGuestNameChange259}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName260}
                            onChange={handleGuestNameChange260}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName261}
                            onChange={handleGuestNameChange261}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom87(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy87(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy87 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName262}
                          onChange={handleGuestNameChange262}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName263}
                            onChange={handleGuestNameChange263}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName264}
                            onChange={handleGuestNameChange264}
                          />
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms3 === 6 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom88(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy88(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy88 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName265}
                          onChange={handleGuestNameChange265}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName266}
                            onChange={handleGuestNameChange266}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName267}
                            onChange={handleGuestNameChange267}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom89(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy89(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy89 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName268}
                          onChange={handleGuestNameChange268}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName269}
                            onChange={handleGuestNameChange269}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName270}
                            onChange={handleGuestNameChange270}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom90(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy90(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy90 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName271}
                          onChange={handleGuestNameChange271}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName272}
                            onChange={handleGuestNameChange272}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName273}
                            onChange={handleGuestNameChange273}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom91(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy91(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy91 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName274}
                          onChange={handleGuestNameChange274}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName275}
                            onChange={handleGuestNameChange275}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName276}
                            onChange={handleGuestNameChange276}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom92(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy92(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy92 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName278}
                          onChange={handleGuestNameChange278}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName279}
                            onChange={handleGuestNameChange279}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName280}
                            onChange={handleGuestNameChange280}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom93(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy93(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy93 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName281}
                          onChange={handleGuestNameChange281}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName282}
                            onChange={handleGuestNameChange282}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName283}
                            onChange={handleGuestNameChange283}
                          />
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms3 === 7 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom94(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy94(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy94 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName284}
                          onChange={handleGuestNameChange284}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName285}
                            onChange={handleGuestNameChange285}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName286}
                            onChange={handleGuestNameChange286}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom95(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy95(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy95 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName287}
                          onChange={handleGuestNameChange287}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName288}
                            onChange={handleGuestNameChange288}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName289}
                            onChange={handleGuestNameChange289}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom96(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy96(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy96 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName291}
                          onChange={handleGuestNameChange291}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName292}
                            onChange={handleGuestNameChange292}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName293}
                            onChange={handleGuestNameChange293}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom97(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy97(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy97 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName294}
                          onChange={handleGuestNameChange294}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName295}
                            onChange={handleGuestNameChange295}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName296}
                            onChange={handleGuestNameChange296}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom98(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy98(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy98 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName297}
                          onChange={handleGuestNameChange297}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName298}
                            onChange={handleGuestNameChange298}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName299}
                            onChange={handleGuestNameChange299}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom99(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy99(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy99 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName300}
                          onChange={handleGuestNameChange300}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName301}
                            onChange={handleGuestNameChange301}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName302}
                            onChange={handleGuestNameChange302}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom100(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy100(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy100 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName303}
                          onChange={handleGuestNameChange303}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName304}
                            onChange={handleGuestNameChange304}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName305}
                            onChange={handleGuestNameChange305}
                          />
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
                {selectedRooms3 === 8 && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom101(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy101(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy101 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName306}
                          onChange={handleGuestNameChange306}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName307}
                            onChange={handleGuestNameChange307}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName308}
                            onChange={handleGuestNameChange308}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom102(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy102(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy102 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName309}
                          onChange={handleGuestNameChange309}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName310}
                            onChange={handleGuestNameChange310}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName311}
                            onChange={handleGuestNameChange311}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom103(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy103(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy103 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName312}
                          onChange={handleGuestNameChange312}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName313}
                            onChange={handleGuestNameChange313}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName314}
                            onChange={handleGuestNameChange314}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom104(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy104(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy104 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName315}
                          onChange={handleGuestNameChange315}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName316}
                            onChange={handleGuestNameChange316}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName317}
                            onChange={handleGuestNameChange317}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom105(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy105(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy105 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName318}
                          onChange={handleGuestNameChange318}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName319}
                            onChange={handleGuestNameChange319}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName320}
                            onChange={handleGuestNameChange320}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom106(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy106(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy106 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName321}
                          onChange={handleGuestNameChange321}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName322}
                            onChange={handleGuestNameChange322}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName323}
                            onChange={handleGuestNameChange323}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom107(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy107(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy107 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName324}
                          onChange={handleGuestNameChange324}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName325}
                            onChange={handleGuestNameChange325}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName326}
                            onChange={handleGuestNameChange326}
                          />
                        </>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Select
                        className="mb-2"
                        onChange={(e) => {
                          setPriceRoom108(
                            e.target.options[
                              e.target.selectedIndex
                            ].getAttribute("data-key")
                          );
                          setSelectedOccupancy108(e.target.value);
                        }}
                      >
                        <option value="">--Select--</option>
                        {room[2].occupancy.map((type) => (
                          <option
                            key={type.price}
                            value={type.type}
                            data-key={type.price}
                          >
                            {type.type + " - " + type.price + " USD"}
                          </option>
                        ))}
                      </Form.Select>
                      {selectedOccupancy108 === "Single Occupancy" ? (
                        // Code to be rendered if selectedOccupancy2 is "Double Occupancy" or "Another Value"
                        <Form.Control
                          type="text"
                          placeholder="Enter Guest Name"
                          value={guestName327}
                          onChange={handleGuestNameChange327}
                        />
                      ) : (
                        // Code to be rendered if selectedOccupancy2 is not "Double Occupancy" or "Another Value"
                        <>
                          <Form.Control
                            className="mb-2"
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName328}
                            onChange={handleGuestNameChange328}
                          />
                          <Form.Control
                            type="text"
                            placeholder="Enter Guest Name"
                            value={guestName329}
                            onChange={handleGuestNameChange329}
                          />
                        </>
                      )}
                    </Form.Group>
                  </>
                )}
              </div>
            )}
          </div>
        );
      case 2:
        return (
          <>
            <h3>Extra Services</h3>
            <div className="col-md-12">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="services1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Courses (To be Paid on Arrival)
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="services1"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Finish Nitrox Course - Practical Only
                        </label>
                        <label for="flexCheckDefault" className="mx-4">
                          USD 500
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Nitrox Course
                        </label>
                        <label for="flexCheckDefault" className="mx-4">
                          USD 500
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Nitrox Course
                        </label>
                        <label for="flexCheckDefault" className="mx-4">
                          USD 500
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Nitrox Tank Fills for the Trip
                        </label>
                        <label for="flexCheckDefault" className="mx-4">
                          USD 500
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="services2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Equipment Rental (To be Paid on Arrival)
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="services2"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Finish Nitrox Course - Practical Only
                        </label>
                        <label for="flexCheckDefault" className="mx-4">
                          USD 500
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Nitrox Course
                        </label>
                        <label for="flexCheckDefault" className="mx-4">
                          USD 500
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Nitrox Course
                        </label>
                        <label for="flexCheckDefault" className="mx-4">
                          USD 500
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Nitrox Tank Fills for the Trip
                        </label>
                        <label for="flexCheckDefault" className="mx-4">
                          USD 500
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="services3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Extra Services (To be Paid on Arrival)
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="services3"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Finish Nitrox Course - Practical Only
                        </label>
                        <label for="flexCheckDefault" className="mx-4">
                          USD 500
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Nitrox Course
                        </label>
                        <label for="flexCheckDefault" className="mx-4">
                          USD 500
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Nitrox Course
                        </label>
                        <label for="flexCheckDefault" className="mx-4">
                          USD 500
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Nitrox Tank Fills for the Trip
                        </label>
                        <label for="flexCheckDefault" className="mx-4">
                          USD 500
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3>Information</h3>
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom01"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        id="validationCustom02"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        className="form-control"
                        id="validationCustom03"
                        placeholder="Contact Number"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      placeholder="Special Requests (Optional)"
                      id="floatingTextarea2"
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center d-flex justify-content-center">
                    <div className="form-check">
                      <p className="fw-bold">Total Amount</p>
                      <p className="fw-bold display-5">
                        USD {serviceCharge + GST + greenTax + total}
                      </p>
                      <p>
                        You will not be charged here. Once you book we will
                        notify and update you via email. You will be sent a
                        payment request once the booking is confirmed.
                      </p>

                      <input
                        className="form-check-input iAccept"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label mx-2"
                        for="invalidCheck"
                      >
                        I Accept
                        <a
                          href="#!"
                          data-bs-toggle="modal"
                          data-bs-target="#policy"
                        >
                          {" "}
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <div className="col text-center">
                    <a href="#" className="btn btn-secondary  mx-2">
                      BOOK
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mb-4">
      <div className="banner mb-2 text-center">
        <h1>{tourName}</h1>
        <p className="mb-0">
          {startDate + " - " + endDate + " | " + tourNights + " NIGHTS"}
        </p>
        <p className="mb-0">
          <FaShip />
          {" " + boatName}
        </p>
      </div>
      <Container>
        <Row>
          <Col className="text-center">
            <h2 className="mb-3">Complete Booking</h2>
            <Breadcrumb>
              {stages.map((stage, index) => (
                <Breadcrumb.Item
                  key={stage}
                  active={index === currentStage}
                  onClick={() => handleBreadcrumbClick(index)}
                >
                  {stage + " "}
                  {index < stages.length - 1 && (
                    <span className="separator">
                      <FaArrowRight />
                    </span>
                  )}
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className="col-md-8">{renderStage()}</Col>
          <Col className="col-md-4">
            <div className="mb-4 border border-primary rounded-4 shadow">
              <h4 className="text-muted mb-3 mt-3 ms-2">Booking Summary</h4>
              <ul className="list-group mb-3">
                <li className="list-group-item lh-condensed border-0">
                  <FaCalendarAlt className="text-muted" />
                  <small className="text-muted ms-2">
                    {startDate +
                      " - " +
                      endDate +
                      " | " +
                      tourNights +
                      " Nights"}
                  </small>
                </li>
                <li className="list-group-item lh-condensed border-0">
                  <FaShip className="text-muted" />
                  <small className="text-muted ms-2">{boatName}</small>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed border-0">
                  <div>
                    <h6 className="my-0">{tourName}</h6>
                    <a
                      href={tourURL}
                      target="_blank"
                      className="text-primary mb-3 mt-3"
                    >
                      View Tour Details
                    </a>
                  </div>
                </li>
              </ul>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span>Booking Total</span>
                      <span className="px-4">{"USD " + total}</span>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className="list-group mb-3">
                        <li className="list-group-item">
                          <div className="row d-flex justify-content-between lh-sm">
                            <div className="col">
                              <h6 className="my-0">
                                <FaUserAlt className="text-muted mx-2" />
                                {guestName1}
                              </h6>
                            </div>
                            <div className="col">
                              <span className="text-muted">
                                USD {priceRoom1}
                              </span>
                            </div>
                          </div>
                          <div className="row text-muted">{room[0].name}</div>
                          <div className="row text-muted">
                            {room[0].deckName}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Tax USD {serviceCharge + GST + greenTax}
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                          <div className="col">
                            <h6 className="my-0">Service Charge</h6>
                          </div>
                          <span className="text-muted">{serviceCharge}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                          <div className="col">
                            <h6 className="my-0">GST</h6>
                          </div>
                          <span className="text-muted">{GST}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                          <div className="col">
                            <h6 className="my-0">Green Tax</h6>
                          </div>
                          <span className="text-muted">{greenTax}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <h3>Total Amount</h3>
              </div>
              <div className="col d-flex justify-content-center">
                <h2>USD {serviceCharge + GST + greenTax + total}</h2>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Button
              variant="primary"
              className="float-end"
              onClick={handleProceedClick}
              disabled={currentStage === stages.length - 1}
            >
              Proceed
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
