import React from "react";
import { useNavigate } from "react-router-dom";
import { SvgFrame } from "components";
import { useModal } from "hooks";
import { CircleBoxIcon, ShortBoxIcon } from "assets";
import type { GetLuckyDayCycleDetail } from "types";
import * as S from "./ArchiveModal.styled";

interface ArchiveModalProps {
  className?: string;
  moreInfo?: React.ReactElement;
  lastInfo?: GetLuckyDayCycleDetail[];
}

function ArchiveModal({ className, moreInfo, lastInfo }: ArchiveModalProps) {
  const navigate = useNavigate();

  const { handleModalClose } = useModal();

  const moveToDetail = (dtlNo: number) => () => {
    navigate(`/luckydays/${dtlNo}`);

    handleModalClose();
  };

  return (
    <S.ArchiveModal hasPadding={!!moreInfo} className={className}>
      {moreInfo && <div>{moreInfo}</div>}
      {lastInfo && (
        <>
          {lastInfo?.length ? (
            <S.LuckyDayButtonWrapper>
              {lastInfo?.map((item) => (
                <S.LuckyDayButton
                  key={item.dtlNo}
                  onClick={moveToDetail(item.dtlNo)}
                >
                  <SvgFrame css={S.svgFrame} icon={<CircleBoxIcon />} />
                  <span>{item.date}</span>
                </S.LuckyDayButton>
              ))}
            </S.LuckyDayButtonWrapper>
          ) : (
            <>
              <span>아직 지난 럭키 데이가 없어요.</span>
              <S.Img src="/images/logo-sad-blue.webp" alt="noLuckyDay" />
            </>
          )}
        </>
      )}

      <S.Button onClick={handleModalClose}>
        <SvgFrame css={S.svgFrameButton} icon={<ShortBoxIcon />} />
        <span>닫기</span>
      </S.Button>
    </S.ArchiveModal>
  );
}

export default ArchiveModal;
