import {useEffect, useState} from "react";
import {getCollectionById} from "../api/getCollectionIdData.ts";
import {useParams} from "react-router-dom";

export interface Collection {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
}

export default function useDetailedCollectionPage() {
  const [collection, setCollection] = useState<Collection | null>(null);
  const [isCollectionLoading, setIsCollectionLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function getCollection() {
      try {
        setIsCollectionLoading(true);
        const data = await getCollectionById(Number(id));

        setCollection(data);
      } catch (error) {
        console.log(error)
      } finally {
        setIsCollectionLoading(false);
      }
    }

    getCollection();
  }, [id]);

  return {collection, isCollectionLoading};
}