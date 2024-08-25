import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getLuckyDayDetail,
  getLuckyDaysActivities,
  postLuckyDay,
  deleteLuckyBoard,
  getLuckyDayCycleInfo,
  getLuckyDayCycleDetails,
  getLuckyDayCycle,
  getLuckyDayReview,
  createLuckyDayReview,
  updateLuckyDayReview,
  deleteLuckyDayReview,
  getLuckyDayCycleLastLuckyDays,
  getLuckyDayCycleList,
  sendFeedback,
} from "apis";
import {
  CreateLuckyDayQueryModel,
  GetLuckyDayCycleDetailResponse,
  GetLuckyDayCycleList,
  GetLuckyDayCycleQueryModel,
  GetLuckyDayCycleLastLuckyDaysQueryModel,
  CreateLuckyDayReviewQueryModel,
  DeleteLuckyDayReviewQueryModel,
  FeedbackForm,
} from "types";

export const useGetLuckyDaysActivities = () => {
  return useQuery({
    queryKey: ["activities"],
    queryFn: () => getLuckyDaysActivities(),
    staleTime: Infinity,
  });
};

export const useCreateLuckyDay = () => {
  return useMutation({
    mutationFn: (req: CreateLuckyDayQueryModel) => postLuckyDay(req),
  });
};

export const useGetLuckyDayDetail = (req: string) => {
  return useQuery({
    queryKey: ["luckyday"],
    queryFn: () => getLuckyDayDetail(req),
  });
};

export const useGetLuckyDayReview = (dtlNo: string) => {
  return useQuery({
    queryKey: ["luckyday", dtlNo],
    queryFn: () => getLuckyDayReview(dtlNo),
    enabled: !!dtlNo,
  });
};

export const useCreateLuckyDayReview = () => {
  return useMutation({
    mutationFn: (req: CreateLuckyDayReviewQueryModel) =>
      createLuckyDayReview(req),
  });
};

export const useUpdateLuckyDayReview = () => {
  return useMutation({
    mutationFn: (req: CreateLuckyDayReviewQueryModel) =>
      updateLuckyDayReview(req),
  });
};

export const useDeleteLuckyDayReview = () => {
  return useMutation({
    mutationFn: (req: DeleteLuckyDayReviewQueryModel) =>
      deleteLuckyDayReview(req),
  });
};

export const useGetLuckyDayCycleInfo = (req: number, enabled?: boolean) => {
  return useQuery({
    queryKey: ["luckydayCycleInfo"],
    queryFn: () => getLuckyDayCycleInfo(req),
    enabled,
  });
};

export const useGetLuckyDayCycle = (req: GetLuckyDayCycleQueryModel) => {
  return useQuery({
    queryKey: ["luckydayCycle"],
    queryFn: () => getLuckyDayCycle(req),
  });
};

export const useGetLuckyDayCycleLastLuckyDays = (
  req: GetLuckyDayCycleLastLuckyDaysQueryModel,
  enabled?: boolean
) => {
  return useQuery({
    queryKey: ["luckydayCycleLastLuckyDays"],
    queryFn: () => getLuckyDayCycleLastLuckyDays(req),
    enabled,
  });
};

export const useDeleteLuckyBoard = () => {
  return useMutation({
    mutationFn: () => deleteLuckyBoard(),
  });
};

export const useGetLuckyDayCycleList = () => {
  return useQuery<GetLuckyDayCycleList[]>({
    queryKey: ["cycles"],
    queryFn: getLuckyDayCycleList,
  });
};

export const useGetLuckyDayCycleDetails = (id: number) => {
  return useQuery<GetLuckyDayCycleDetailResponse>({
    queryKey: ["luckyDayCycleDetails", id],
    queryFn: () => getLuckyDayCycleDetails(id),
    enabled: !!id,
  });
};

export const useSendFeedback = () => {
  return useMutation({
    mutationFn: (req: FeedbackForm) => sendFeedback(req),
  });
};
