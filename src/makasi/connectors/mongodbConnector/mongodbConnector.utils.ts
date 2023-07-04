export function clean<TData>(data: any): TData | null {
  if (!data) return null;

  const { _id, ...rest } = data;

  return {
    id: _id.toString(),
    ...rest,
  };
}

export const $match = (data: any) => ({
  $match: data,
});

export const $lookup = (data: {
  from: string;
  localField: string;
  foreignField: string;
  as: string;
}) => ({
  $lookup: data,
});

export const $limit = (limit: number) => ({ $limit: limit });

export const $unwind = (field: string) => ({ $unwind: field });
export const $project = (data: any) => ({ $project: data });
