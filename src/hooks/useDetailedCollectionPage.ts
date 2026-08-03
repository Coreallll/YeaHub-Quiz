import {useEffect, useState} from "react";
import {getCollectionById} from "../api/getCollectionIdData.ts";
import {useParams} from "react-router-dom";
import type {CollectionItem} from "../api/getColletionsData.ts";

export default function useDetailedCollectionPage() {
  const [collection, setCollection] = useState<CollectionItem | null>(null);
  const [isCollectionLoading, setIsCollectionLoading] = useState(false);

  const { collectionId } = useParams();

  useEffect(() => {
    async function getCollection() {
      try {
        setIsCollectionLoading(true);
        const data = await getCollectionById(Number(collectionId));

        setCollection(data);
      } catch (error) {
        console.log(error)
      } finally {
        setIsCollectionLoading(false);
      }
    }

    getCollection();
  }, [collectionId]);

  return {collection, isCollectionLoading};
}