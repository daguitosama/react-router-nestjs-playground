import { Button } from '@blueprintjs/core';
import { observer } from 'mobx-react-lite';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Workspace } from 'polotno/canvas/workspace';
import { PagesTimeline } from 'polotno/pages-timeline';
import { SidePanel } from 'polotno/side-panel';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';

import '@blueprintjs/core/lib/css/blueprint.css';

import { createStore } from 'polotno/model/store';

const store = createStore({
    key: 'YOUR_API_KEY', // you can create it here: https://polotno.com/cabinet/
    // you can hide back-link on a paid license
    // but it will be good if you can keep it for Polotno project support
    showCredit: true
});
store.setSize(1000, 1000);
const frontPage = store.addPage();

frontPage.addElement({
    type: 'svg',
    src: '/front.svg',
    width: 2500,
    height: 2500,
    x: -750,
    y: -400,
    showInExport: false,
    selectable: false
});

const backPage = store.addPage();

backPage.addElement({
    type: 'svg',
    src: '/back.svg',
    width: 2500,
    height: 2500,
    x: -750,
    y: -400,
    showInExport: false,
    selectable: false
});

store.selectPage(frontPage.id);

const PageControls = observer(({ xPadding, yPadding, store, page }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: '10px',
                left: '10px'
            }}
        >
            <Button
                active={store.pages.indexOf(store.activePage) === 0}
                onClick={() => {
                    store.selectPage(store.pages[0].id);
                }}
            >
                Front
            </Button>
            <Button
                active={store.pages.indexOf(store.activePage) === 1}
                onClick={() => {
                    store.selectPage(store.pages[1].id);
                }}
            >
                Back
            </Button>
        </div>
    );
});

export default function Studio() {
    return (
        <PolotnoContainer style={{ width: '100vw', height: '100vh' }}>
            <SidePanelWrap>
                <SidePanel store={store} />
            </SidePanelWrap>
            <WorkspaceWrap>
                <Toolbar store={store} downloadButtonEnabled />
                <Workspace
                    store={store}
                    renderOnlyActivePage
                    components={{ PageControls }}
                    paddingX={100}
                    paddingY={100}
                    backgroundColor="transparent"
                    // pageBorderColor="transparent"
                />
                <ZoomButtons store={store} />
                <PagesTimeline store={store} />
            </WorkspaceWrap>
        </PolotnoContainer>
    );
}
