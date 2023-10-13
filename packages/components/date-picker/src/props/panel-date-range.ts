import { buildProps, definePropType } from '@element-plus/utils'
import { panelRangeSharedProps, panelSharedProps } from './shared'

import type { ExtractPropTypes } from 'vue'
import {
  GetDisabledHours,
  GetDisabledMinutes,
  GetDisabledSeconds,
} from '../../../time-picker/src/props/shared'

export const panelDateRangeProps = buildProps({
  ...panelSharedProps,
  ...panelRangeSharedProps,
  /**
   * @description To specify the array of hours that cannot be selected
   */
  disabledHours: {
    type: definePropType<GetDisabledHours>(Function),
  },
  /**
   * @description To specify the array of minutes that cannot be selected
   */
  disabledMinutes: {
    type: definePropType<GetDisabledMinutes>(Function),
  },
  /**
   * @description To specify the array of seconds that cannot be selected
   */
  disabledSeconds: {
    type: definePropType<GetDisabledSeconds>(Function),
  },
} as const)

export type PanelDateRangeProps = ExtractPropTypes<typeof panelDateRangeProps>
