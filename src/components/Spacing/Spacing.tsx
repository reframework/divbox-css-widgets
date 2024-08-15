import { Box, Grid } from '@chakra-ui/react'
import { styles } from '@src/components/Spacing/Spacing.styles'
import { Button } from '@src/components/Spacing/Button/Button'
import { MARGIN_BUTTON_VALUES, PADDING_BUTTON_VALUES } from '@src/constants/spacing'

export const Spacing = () => {
  return (
    <Grid height={'124px'} width={'100%'} position={'relative'}>
      <Box css={styles.label}>Margin</Box>
      <Box css={styles.box1}>
        <Button values={MARGIN_BUTTON_VALUES} />
      </Box>
      <Box css={styles.box2}>
        <Button values={MARGIN_BUTTON_VALUES} />
      </Box>
      <Box css={styles.box3}>
        <Box css={styles.label}>Padding</Box>
        <Box css={styles.box3_1}>
          <Button values={PADDING_BUTTON_VALUES} />
        </Box>
        <Box css={styles.box3_2}>
          <Button values={PADDING_BUTTON_VALUES} />
        </Box>
        <Box css={styles.box3_3}></Box>
        <Box css={styles.box3_4}>
          <Button values={PADDING_BUTTON_VALUES} />
        </Box>
        <Box css={styles.box3_5}>
          <Button values={PADDING_BUTTON_VALUES} />
        </Box>
      </Box>
      <Box css={styles.box4}>
        <Button values={MARGIN_BUTTON_VALUES} />
      </Box>
      <Box css={styles.box5}>
        <Button values={MARGIN_BUTTON_VALUES} />
      </Box>
    </Grid>
  )
}
