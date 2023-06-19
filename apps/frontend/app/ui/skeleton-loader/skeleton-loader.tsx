const NUMBER_OF_SKELETON_TRANSACTIONS = 5;

interface SkeletonLoaderProps {
  listToRender: number;
}

export const SkeletonLoader = ({
  listToRender = NUMBER_OF_SKELETON_TRANSACTIONS,
}: SkeletonLoaderProps) => {
  return (
    <>
      {Array.from({ length: listToRender }, (_, i) => (
        <div key={i} className="py-5">
          <div className="animate-pulse flex justify-between items-center py-5 px-5 rounded-md bg-gray-100 dark:bg-gray-700 shadow-lg dark:shadow-gray-700/50">
            <div className="flex gap-x-4 gap-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-300" />
              <div className="flex justify-center flex-col px-3">
                <div className="w-32 h-2 rounded-md bg-slate-300" />
                <div className="w-32 h-2 rounded-md mt-4 bg-slate-300" />
              </div>
            </div>
            <div>
              <div className="h-3 w-9 rounded-md bg-slate-300" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
