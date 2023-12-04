import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NewsRequest } from "../type";

type State = {
    news: NewsRequest | undefined,
}

type Action = {
    getNews: () => Promise<void>
}
export const useNewsStore = create<State & Action>()(
    persist(
        (set, get) => ({
            news: undefined,
            async getNews() {
                const url =
                    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fa7e4d6b70254ed2b9c70ef65a4936da";
                const req = new Request(url);
                const res = await fetch(req);
                const data = await res.json();
                console.log('Send request(ᵔᴥᵔ)')
                set(() => ({ news: data }));
            }
        })
        , {
            name: "news-store",
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
);
