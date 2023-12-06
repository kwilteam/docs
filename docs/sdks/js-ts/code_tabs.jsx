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

const initJsWeb = `import { BrowserProvider } from 'ethers';
import { WebKwil } from '@kwilteam/kwil-js';

// to be used for funding and signing transactions
const provider = new BrowserProvider(window.ethereum)

const kwil = new WebKwil({
    kwilProvider: "kwil_provider_endpoint",
    chainId: "your_kwil_chain_id"
});`

const initJsNode = `const { Wallet } = require('ethers');
const kwiljs = require('@kwilteam/kwil-js');

// to be used for signing transactions
// instead of a provider, nodeJS requires a wallet
const wallet = new Wallet("my_ethereum_private_key")

const kwil = new kwiljs.NodeKwil({
    kwilProvider: "kwil_provider_endpoint",
    chainId: "your_kwil_chain_id"
});`

export function InitTabs() {
    const tabsData = [
        {
            value: 'js-web',
            label: 'Web',
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