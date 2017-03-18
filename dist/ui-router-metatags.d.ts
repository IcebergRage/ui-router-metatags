/**
 * Metatags for angular-ui-router
 */
declare namespace uiroutermetatags {
    interface IMetaTags {
        title?: string | Function;
        description?: string | Function;
        keywords?: string | Function;
        robots?: string | Function;
        canonical?: string | Function;
        properties?: {
            [index: string]: string | Function;
        };
        prerender?: Prerender;
    }
    interface Prerender {
        statusCode?: number | Function;
        header?: string | Function;
    }
    interface IProvider {
        setTitlePrefix(prefix: string): IProvider;
        setTitleSuffix(suffix: string): IProvider;
        setDefaultTitle(title: string): IProvider;
        setDefaultDescription(description: string): IProvider;
        setDefaultKeywords(keywords: string): IProvider;
        setDefaultRobots(robots: string): IProvider;
        setStaticProperties(properties: {}): IProvider;
        setDefaultTwitter(properties: {}): IProvider;
        setOGURL(enabled: boolean): IProvider;
        setTWURL(enabled: boolean): IProvider;
    }
    interface IService {
        update(tags: IMetaTags): void;
        prerender: uiroutermetatags.Prerender;
    }
    interface IConfig {
        prefix: string;
        suffix: string;
        defaultTitle: string;
        defaultDescription: string;
        defaultTwitter: {};
        defaultKeywords: string;
        defaultRobots: string;
        staticProperties: {};
        enableOGURL: boolean;
        enableTWURL: boolean;
    }
}
declare module angular.ui {
    interface IState {
        metaTags?: uiroutermetatags.IMetaTags;
    }
}
interface Window {
    prerenderReady?: boolean;
}
