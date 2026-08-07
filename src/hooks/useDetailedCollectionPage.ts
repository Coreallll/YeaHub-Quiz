import {getCollectionById} from "../api/getCollectionIdData.ts";
import {useParams} from "react-router-dom";
import {useAsync} from "./useAsync.ts";

export default function useDetailedCollectionPage() {

  const { collectionId } = useParams();

  const {
    data: collection,
    isLoading: isCollectionLoading
  } = useAsync(
    (signal) => getCollectionById(Number(collectionId), signal), [collectionId]
  )

  return {collection, isCollectionLoading};
}