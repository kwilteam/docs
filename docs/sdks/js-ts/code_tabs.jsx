import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

function CodeTabs({ tabsData }) {
    return (
        <Tabs>
            {tabsData.map((tab, index) => (
                <TabItem value={tab.value} label={tab.label} default={index === 0}>
                    <CodeBlock language="js">
                        {tab.code}
                    </CodeBlock>
                </TabItem>
            ))}
        </Tabs>
    );
}

const initJsWeb = `import { WebKwil } from '@kwilteam/kwil-js';

const kwil = new WebKwil({
    kwilProvider: "kwil_provider_endpoint",
    chainId: "your_kwil_chain_id"
});`

const initJsNode = `const kwiljs = require('@kwilteam/kwil-js');

const kwil = new kwiljs.NodeKwil({
    kwilProvider: "kwil_provider_endpoint",
    chainId: "your_kwil_chain_id"
});`

export function InitTabs() {
    const tabsData = [
        {
            value: 'js-web',
            label: 'Browser',
            code: initJsWeb
        },
        {
            value: 'js-node',
            label: 'NodeJS',
            code: initJsNode
        },
    ];

    return <CodeTabs tabsData={tabsData} />;
}